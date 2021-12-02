import React, { memo } from 'react';
import styled from 'styled-components';

function PageNotFound() {
    return <PageNotFoundRoot>Page Not Found</PageNotFoundRoot>;
}

export default memo(PageNotFound);

const PageNotFoundRoot = styled.div`
    position: fixed;
    background-color: #fff;
    inset: 0px;
    color: #38b2a9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`;
