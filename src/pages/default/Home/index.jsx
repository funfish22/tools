import React, { useEffect, useContext, memo } from 'react';
import { MyContext } from '@reducers';

import Card from '@component/molecules/Card';

import styled from 'styled-components';

function Home() {
    const { setH1Title } = useContext(MyContext);

    useEffect(() => {
        setH1Title('首頁');
    });

    return (
        <Container>
            <Card />
        </Container>
    );
}

export default memo(Home);

const Container = styled.div`
    width: 1140px;
    margin: 0 auto;
    padding: 50px 0;
`;
