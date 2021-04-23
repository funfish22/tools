import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function IconCard(props) {
    const { size, src, id, webId, version } = props;

    function reName() {
        if (size !== 128) {
            if (version === 1) {
                return `app_icon_${size}x${size}.png`;
            } else if (version === 2) {
                return `app_icon_effects_${size}x${size}.png`;
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
    }

    return (
        <IconCardRoot>
            <h3>
                {size} x {size}
            </h3>
            <div className="img_img">
                <img src={src} id={'resizeImg' + (id + 1)} />
            </div>
            <p id={'iconName' + (id + 1)}>{reName()}</p>
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
    flex-direction: column;

    .img_img {
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
`;