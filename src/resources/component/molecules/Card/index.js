import { Card } from 'antd';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const CardArray = [
    {
        title: 'APP ICON 圖片尺寸調整工具',
        bgColor: '#02E5C9',
        color: '#000',
        link: '/resizeIcon',
    },
    {
        title: 'QR CODE 自動爬蟲工具',
        bgColor: '#05baff',
        color: '#000',
        link: '/qrCode',
    },
];

function CardRoot() {
    return (
        <CardBlock title="工具">
            {CardArray.map((row, index) => (
                <CardLink to={row.link} key={index}>
                    <CardStyle bgcolor={row.bgColor} color={row.color}>
                        {row.title}
                    </CardStyle>
                </CardLink>
            ))}
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
