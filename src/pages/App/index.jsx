import React, { useState, memo } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Router from './Router';

import { MyContext } from '@reducers';

import { Layout } from 'antd';
import 'antd/dist/antd.css';

import styled from 'styled-components';

import Header from '@component/organisms/Header';
import Footer from '@component/organisms/Footer';

function App() {
    const [h1Title, setH1Title] = useState();
    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <MyContext.Provider value={{ h1Title, setH1Title, loginStatus, setLoginStatus }}>
            <HashRouter>
                <Flex>
                    <Header />
                    <Layout>
                        <Router />
                    </Layout>
                    <LayoutFooter>
                        <Footer />
                    </LayoutFooter>
                </Flex>
            </HashRouter>
        </MyContext.Provider>
    );
}

export default memo(App);

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const LayoutFooter = styled(Layout)`
    flex: none;
    margin-top: auto;

    .ant-layout-footer {
        color: #fff;
        background-color: #000;
    }
`;
