import React, { useContext } from 'react';

import { Layout } from 'antd';

import { MyContext } from '@reducers';

import styled from 'styled-components';

function Header(props) {
    const { Header } = Layout;

    const { h1Title } = useContext(MyContext);

    return (
        <Header>
            <Title>{h1Title}</Title>
        </Header>
    );
}

export default Header;

const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`;
