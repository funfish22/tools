import React, { Suspense, memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Spin } from 'antd';

import { routes } from '@route';

function Router() {
    return (
        <Suspense
            fallback={
                <SpinRoot>
                    <Spin size="large" />
                </SpinRoot>
            }
        >
            <Switch>
                {routes.map((row, index) => (
                    <Route key={index} path={row.path} exact={row.exact} component={row.component}></Route>
                ))}
            </Switch>
        </Suspense>
    );
}

export default memo(Router);

const SpinRoot = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;
