import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const LinkArray = [
    {
        title: '首頁',
        link: '/',
    },
    {
        title: 'APP ICON 圖片尺寸調整工具',
        link: '/resizeIcon',
    },
    {
        title: 'QR CODE 自動爬蟲工具',
        link: '/qrCode',
    },
];

function SideMenu(props) {
    const { menuSwitch, handleCloseMenu } = props;

    return (
        <SideMenuRoot className={menuSwitch ? 'SideMenuActive' : ''}>
            <Menu selectable={false} theme="dark">
                {LinkArray.map((row, index) => (
                    <Menu.Item key={index}>
                        <Link to={row.link} onClick={handleCloseMenu}>
                            {row.title}
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        </SideMenuRoot>
    );
}

export default SideMenu;

const SideMenuRoot = styled.nav`
    width: 200px;
    position: fixed;
    top: 64px;
    bottom: 70px;
    left: 0;
    z-index: 10;
    background: #001529;
    transform: translateX(-100%);
    transition: transform 0.3s;

    &.SideMenuActive {
        transform: translateX(0%);
    }
`;
