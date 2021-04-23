import React, { useContext } from 'react';

import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import SideMenu from '@component/molecules/SideMenu';

import { MyContext } from '@reducers';

import styled from 'styled-components';

function Header(props) {
    const { Header } = Layout;

    const { h1Title } = useContext(MyContext);

    return (
        <Header>
            <ButtonRoot type="ghost" size="large">
                <MenuOutlined style={{ color: 'white' }} />
            </ButtonRoot>
            <Title>{h1Title}</Title>
            <SideMenu />
        </Header>
    );
}

export default Header;

const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`;

const ButtonRoot = styled(Button)`
    position: absolute;
    top: 12px;
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
