import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from 'firebase';

import { Layout, Button, Space, Modal, Form, Input, Alert } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import SideMenu from '@component/molecules/SideMenu';

import { MyContext } from '@reducers';

import styled from 'styled-components';

function Header(props) {
    const { Header } = Layout;

    const { h1Title, loginStatus, setLoginStatus } = useContext(MyContext);
    const [menuSwitch, setMenuSwitch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    const formRef = useRef();

    let location = useLocation();

    const handleMenuSwitch = () => {
        setMenuSwitch(!menuSwitch);
    };

    const handleCloseMenu = () => {
        setMenuSwitch(false);
    };

    const handleModalSwitch = () => {
        setLoginModalVisible(true);
    };

    const handleOk = () => {
        const { Username, Password } = formRef.current.getFieldValue();
        setConfirmLoading(true);
        firebase
            .auth()
            .signInWithEmailAndPassword(Username, Password)
            .then(() => {
                setLoginModalVisible(false);
                setConfirmLoading(false);
                setAlertText('登入成功');
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                    setAlertText('');
                }, 5000);
            })
            .catch((error) => {
                console.log(error.message);
                setConfirmLoading(false);
            });
    };

    const handleCancel = () => {
        setLoginModalVisible(false);
    };

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(function () {
                setAlertText('登出成功');
                setAlert(true);
                setTimeout(() => {
                    setAlert(false);
                    setAlertText('');
                }, 5000);
            });
    };

    const handleAlertClose = () => {
        setAlert(false);
    };

    useEffect(() => {
        location.pathname === '/announcementF2E' ? setShowLogin(true) : setShowLogin(false);
    }, [location]);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoginStatus(true);
            } else {
                setLoginStatus(false);
            }
        });
    });

    return (
        <Header>
            {alert && <AlertRoot type="success" message={alertText} banner closable onClose={handleAlertClose} />}
            <HeaderBlock>
                <ButtonRoot type="ghost" size="large" onClick={handleMenuSwitch}>
                    <MenuOutlined style={{ color: 'white' }} />
                </ButtonRoot>
                <Title>{h1Title}</Title>
                <SideMenu menuSwitch={menuSwitch} handleCloseMenu={handleCloseMenu} />
                {showLogin && (
                    <LoginButton>
                        <Space>
                            {!loginStatus && (
                                <Button type="primary" onClick={handleModalSwitch}>
                                    登入
                                </Button>
                            )}
                            <Button danger onClick={handleSignOut}>
                                登出
                            </Button>
                        </Space>
                    </LoginButton>
                )}
                <Modal
                    title="登入視窗"
                    visible={loginModalVisible}
                    confirmLoading={confirmLoading}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okButtonProps={{ htmlType: 'submit', form: 'loginForm' }}
                    okText="登入"
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
                            label="帳號"
                            name="Username"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入帳號!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="密碼"
                            name="Password"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入密碼!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </Modal>
            </HeaderBlock>
        </Header>
    );
}

export default Header;

const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

const HeaderBlock = styled.div`
    position: relative;
`;

const ButtonRoot = styled(Button)`
    position: absolute;
    top: 12px;
    left: 0;
    svg {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    &:focus {
        border-color: #fff;
    }
    &:hover {
        border-color: #40a9ff;
        svg {
            color: #40a9ff;
        }
    }
`;

const LoginButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const AlertRoot = styled(Alert)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
`;
