import { Card } from 'antd';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import { routes } from '@route';

function CardRoot() {
    return (
        <CardBlock title="工具">
            {routes.map((row, index) =>
                row.path !== '/' && row.path !== '*' ? (
                    <CardLink to={row.path} key={index}>
                        <CardStyle bgcolor={row.bgColor} color={row.color}>
                            {row.name}
                        </CardStyle>
                    </CardLink>
                ) : null
            )}
        </CardBlock>
    );
}

export default CardRoot;

const CardBlock = styled(Card)`
    border: none;
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
