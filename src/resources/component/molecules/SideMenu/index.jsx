import React, { useContext, memo } from 'react';
import { MyContext } from '@reducers';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '@route';

import styled from 'styled-components';

function SideMenu(props) {
    const { menuSwitch, handleCloseMenu } = props;
    const { loginStatus } = useContext(MyContext);

    const renderMenu = () => {
        const render = routes.map((row, index) => {
            return row.path !== '*' && row.login !== loginStatus ? (
                <Menu.Item key={index}>
                    <Link to={row.path} onClick={handleCloseMenu}>
                        {row.name}
                    </Link>
                </Menu.Item>
            ) : null;
        });
        return render;
    };

    return (
        <SideMenuRoot className={menuSwitch ? 'SideMenuActive' : ''}>
            <Menu selectable={false} theme="dark">
                {renderMenu()}
            </Menu>
        </SideMenuRoot>
    );
}

export default memo(SideMenu);

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
