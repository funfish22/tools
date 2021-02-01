import { HashRouter, BrowserRouter } from 'react-router-dom';

import { Layout } from 'antd';

import styled from 'styled-components';

import 'antd/dist/antd.css';

import Router from './Router';

import Header from '@component/organisms/Header';
import Footer from '@component/organisms/Footer';

function App() {
    return (
        <BrowserRouter>
            <Flex>
                <Header title="首頁" />
                <Layout>
                    <Router />
                </Layout>
                <LayoutFooter>
                    <Footer />
                </LayoutFooter>
            </Flex>
        </BrowserRouter>
    );
}

export default App;

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
