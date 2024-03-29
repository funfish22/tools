import React, { useContext, memo } from 'react';
import { MyContext } from '@reducers';
import { Card } from 'antd';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { routes } from '@route';

function CardRoot() {
    const { loginStatus } = useContext(MyContext);

    return (
        <>
            <CardBlock title="工具">
                {routes.map(
                    (row, index) =>
                        row.tags === 'tool' && (
                            <CardLink to={row.path} key={index}>
                                <CardStyle bgcolor={row.bgColor} color={row.color}>
                                    {row.name}
                                </CardStyle>
                            </CardLink>
                        )
                )}
            </CardBlock>
            {loginStatus && (
                <CardBlock title="前端工具">
                    {routes.map(
                        (row, index) =>
                            row.tags === 'announcement' && (
                                <CardLink to={row.path} key={index}>
                                    <CardStyle bgcolor={row.bgColor} color={row.color}>
                                        {row.name}
                                    </CardStyle>
                                </CardLink>
                            )
                    )}
                </CardBlock>
            )}
        </>
    );
}

export default memo(CardRoot);

const CardBlock = styled(Card)`
    border: none;
    margin-bottom: 40px;
    .ant-card-head-title {
        font-weight: bold;
    }
`;

const CardStyle = styled(Card.Grid)`
    width: 25%;
    text-align: center;
    padding: 50px 24px;
    font-weight: bold;
    font-size: 16px;

    ${(props) =>
        props &&
        css`
            background-color: ${props.bgcolor};
            color: ${props.color};
        `}
`;

const CardLink = styled(Link)``;
