import React, { useEffect, useState, useContext, useRef } from 'react';
import { MyContext } from '@reducers';

import { Button, Modal, Form, Input } from 'antd';
import firebase from 'firebase';

import styled from 'styled-components';

function AnnouncementF2E() {
    const [announcementLists, setAnnouncementLists] = useState([]);
    const [addAnnouncementModalVisible, setAddAnnouncementModalVisible] = useState(false);

    const { setH1Title, loginStatus } = useContext(MyContext);

    const formRef = useRef();

    const db = firebase.firestore();
    useEffect(() => {
        setH1Title('前端公告');

        readAnnouncement();
    }, [loginStatus, setH1Title, db]);

    const handleAddAnnouncementModalVisible = () => {
        setAddAnnouncementModalVisible(true);
    };

    const readAnnouncement = () => {
        db.collection('pcAnnouncement')
            .get()
            .then((querySnapshot) => {
                const documents = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    };
                });
                setAnnouncementLists(documents);
            })
            .catch();
    };

    const handleOk = () => {
        const { title, content } = formRef.current.getFieldValue();
        const time = new Date().getTime();
        if (title && content) {
            db.collection('pcAnnouncement')
                .doc()
                .set({
                    title,
                    content,
                    time,
                })
                .then(() => {
                    setAddAnnouncementModalVisible(false);
                    setAnnouncementLists([{ title, content, time }, ...announcementLists]);
                    console.log('Document successfully updated!');
                })
                .catch();
        }
    };

    const handleCancel = () => {
        setAddAnnouncementModalVisible(false);
    };

    return (
        <AnnouncementF2ERoot>
            <AddAnnouncement>
                {loginStatus && (
                    <Button type="primary" onClick={handleAddAnnouncementModalVisible}>
                        新增公告
                    </Button>
                )}
            </AddAnnouncement>
            <ul>
                {!!announcementLists &&
                    announcementLists
                        .sort((a, b) => b.time - a.time)
                        .map((row) => (
                            <li key={row.time}>
                                {row.title} {row.content}
                            </li>
                        ))}
            </ul>
            <Modal
                title="新增公告"
                visible={addAnnouncementModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ htmlType: 'submit', form: 'loginForm' }}
                okText="新增"
                cancelText="取消"
            >
                <Form
                    id="loginForm"
                    name="basic"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 19,
                    }}
                    ref={formRef}
                >
                    <Form.Item
                        label="名稱"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: '請輸入名稱!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="內容"
                        name="content"
                        rules={[
                            {
                                required: true,
                                message: '請輸入內容!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </AnnouncementF2ERoot>
    );
}

export default AnnouncementF2E;

const AnnouncementF2ERoot = styled.main`
    width: 1000px;
    margin: 20px auto;
`;

const AddAnnouncement = styled.div`
    display: flex;
    height: 32px;
    .ant-btn {
        margin-left: auto;
    }
`;
