import React, { memo } from 'react';
import { Layout } from 'antd';

import styled from 'styled-components';

function Footer() {
    const { Footer } = Layout;

    return (
        <Footer>
            <Title>ALL RIGHTS RESERVED. DESIGNED BY Aga Lin</Title>
        </Footer>
    );
}

export default memo(Footer);

const Title = styled.div`
    text-align: center;
`;
