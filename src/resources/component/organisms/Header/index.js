import { Layout } from 'antd';

import styled from 'styled-components';

function Header(props) {
    const { Header } = Layout;

    return (
        <Header>
            <Title>{props.title}</Title>
        </Header>
    );
}

export default Header;

const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-weight: bold;
`;
