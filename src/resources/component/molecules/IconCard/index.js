import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Input } from 'antd';

function IconCard(props) {
    const { size, src, id, webId, version, BatchImg, name, multiple, changeName, onChangeName } = props;
    function reName() {
        if (size[0] !== 128) {
            if (version === 1) {
                return `app_icon_${size[0]}x${size[1]}.png`;
            } else if (version === 2) {
                return `app_icon_effects_${size[0]}x${size[0]}.png`;
            }
        } else {
            if (version === 1) {
                return `app_icon_${webId}.png`;
            } else if (version === 2) {
                return `app_icon_effects_${webId}.png`;
            }
        }
        if (size === 150) {
            return `${webId}_qrcode.png`;
        }
        if (BatchImg) {
            return `${name} ${multiple}`;
        }
    }
    return (
        <IconCardRoot>
            <h3>
                {size[0]} x {size[1]}
            </h3>
            <div className="img_img">
                <img src={src} id={'resizeImg' + (id + 1)} alt={name} />
            </div>
            {changeName ? (
                <>
                    <p className="card_name" id={'iconName' + (id + 1)}>
                        {reName()}
                    </p>{' '}
                    <Input size="small" style={{ marginTop: '11.2px' }} onChange={onChangeName} />
                </>
            ) : (
                <p className="card_name" id={'iconName' + (id + 1)}>
                    {reName()}
                </p>
            )}
        </IconCardRoot>
    );
}

export default IconCard;

const IconCardRoot = styled.div`
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .img_img {
        width: 192px;
        height: 192px;
        position: relative;
    }

    h3 {
        font-size: 20px;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100%;
        max-height: 100%;
    }

    p {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 16px;
    }

    .card_name {
        max-width: 218px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        padding-right: 20px;
        &:after {
            position: absolute;
            content: '倍';
            right: 0;
        }
    }
`;
