import React, { useEffect, useState, useContext, useRef } from 'react';
import { MyContext } from '@reducers';

import { Button, Modal, Form, Input, Table } from 'antd';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
import firebase from 'firebase';

import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';

const columns = [
    {
        title: '標題',
        dataIndex: 'title',
        content: 'title',
    },
    {
        title: '時間',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '內容',
        dataIndex: 'content',
        key: 'content',
        render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
    },
    {
        title: '編輯',
        dataIndex: '',
        key: 'x',
        render: () => <Button type="primary">編輯</Button>,
    },
];

function AnnouncementF2E() {
    const [announcementLists, setAnnouncementLists] = useState([]);
    const [addAnnouncementModalVisible, setAddAnnouncementModalVisible] = useState(false);
    const [announcementContent, setAnnouncementContent] = useState('<p>123</p>');

    const { setH1Title, loginStatus } = useContext(MyContext);

    const formRef = useRef();
    const editor = useRef();

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
                const newDocuments = documents.sort((a, b) => b.time - a.time);
                setAnnouncementLists(newDocuments);
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
        console.log('editor');
        console.log('editor.current', editor.current);
        editor.current.destroy();
    };

    const handleChange = (value) => {
        setAnnouncementContent(value);
    };

    const checkPrice = () => {
        if (announcementContent !== '') {
            console.log('announcementContent', announcementContent);
            return Promise.resolve();
        }
        return Promise.reject(new Error('Price must be greater than zero!'));
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
            {/* <ul>{!!announcementLists && announcementLists.sort((a, b) => b.time - a.time).map((row) => <Table />)}</ul> */}
            {!!announcementLists && <Table dataSource={announcementLists} columns={columns} />}
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
                        label="標題"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: '請輸入標題!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="內容"
                        name="content"
                        initialValue={announcementContent}
                        rules={[
                            {
                                required: true,
                                validator: checkPrice,
                            },
                        ]}
                    ></Form.Item>
                </Form>
            </Modal>
            <ReactQuill ref={editor} value={announcementContent} onChange={handleChange} />
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
