import React, { useEffect, useContext, useState, memo } from 'react';

import { MyContext } from '@reducers';

import { Form, Row, Col, Upload, message, Input, Button, Alert, Radio } from 'antd';

import styled from 'styled-components';

import { saveAs } from 'file-saver';

import Title from '@component/atoms/Title';
import IconCard from '@component/molecules/IconCard';

import { deleteQRcodeObj, createQRcodeImg, getQRcodeImg } from '@apis/QRcode';

function QRcode() {
    const { setH1Title } = useContext(MyContext);
    const [webId, setWebId] = useState('');
    const [webUrl, setWebUrl] = useState('');
    const [qrCode, setQRcode] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');

    useEffect(() => {
        setH1Title('QR CODE 自動爬蟲工具');
    });

    function handleChangeID(e) {
        setWebId(e.target.value);
    }

    function handleWebUrl(e) {
        setWebUrl(e.target.value);
    }

    async function handleWebspider() {
        await deleteQRcodeObj();

        if (!webId || !webUrl) {
            !webId && webUrl && setAlertText('請輸入站點ID');
            !webUrl && webId && setAlertText('請輸入要爬蟲的網站');
            !webId && !webUrl && setAlertText('請輸入站點ID和要爬蟲的網站');
            setAlert(true);
        } else {
            await createQRcodeImg(webUrl);

            const qrCodeObj = await getQRcodeImg();

            if (qrCodeObj.data.length > 0) {
                await qrCodeCanvas(qrCodeObj.data[0].data);
            } else {
                setAlertText('爬不到圖片');
                setAlert(true);
            }
        }

        setTimeout(() => {
            setAlert(false);
            setAlertText('');
        }, 2000);
    }

    function qrCodeCanvas(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const newQRCodeImg = new Image();

        newQRCodeImg.src = img;
        canvas.width = 150;
        canvas.height = 150;

        setTimeout(() => {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(newQRCodeImg, 5, 5, 140, 140);
            const dataURL = canvas.toDataURL('image/png');
            setQRcode(dataURL);
        });
    }

    function handleAlertClose() {
        setAlert(false);
    }

    function handleReset() {
        setWebUrl('');
        setWebId('');
        setQRcode('');
    }

    function handleSave() {
        saveAs(qrCode, `${webId}_qrcode`);
    }

    return (
        <QRcodeRoot>
            {alert && <AlertRoot type="error" message={alertText} banner closable onClose={handleAlertClose} />}
            <QRcodeHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                圖片資訊
                            </TitleRoot>
                            <InputRoot>
                                <p>站點ID</p>
                                <Input size="small" type="number" value={webId} onChange={handleChangeID} />
                            </InputRoot>
                            <InputRoot>
                                <p>爬蟲網址</p>
                                <Input size="small" value={webUrl} onChange={handleWebUrl} />
                            </InputRoot>
                        </Col>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                注意事項
                            </TitleRoot>
                            <p>執行此爬蟲工具，請先喚醒爬蟲API，連結如下</p>
                            <WackUp href="https://still-hamlet-64914.herokuapp.com" target="_blank" rel="noreferrer">
                                喚醒網址
                            </WackUp>
                            <p>當喚醒之後，網頁會出現如下圖的資訊，代表已喚醒成功，就可以操控此工具了</p>
                            <img src="https://i.imgur.com/8v4kY5O.png" alt="喚醒" />
                        </Col>
                        <Col span={4} style={{ display: 'flex', flexDirection: 'column' }}>
                            <TitleRoot size={20} borderBottom>
                                功能
                            </TitleRoot>
                            <Button type="primary" size="large" block onClick={handleWebspider}>
                                執行爬蟲
                            </Button>
                            <Button
                                type="danger"
                                size="large"
                                block
                                style={{ marginTop: '10px' }}
                                onClick={handleReset}
                            >
                                重置
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                block
                                style={{ marginTop: 'auto' }}
                                href="https://tinypng.com/"
                                target="_blank"
                            >
                                TinyPng網站
                            </Button>
                            <Button
                                type="primary"
                                size="large"
                                block
                                style={{ marginTop: '10px' }}
                                onClick={handleSave}
                            >
                                下載
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </QRcodeHeader>
            <QRcodeBody>
                {qrCode && (
                    <Col span={6}>
                        <IconCard size={[150, 150]} src={qrCode} webId={webId} />
                    </Col>
                )}
            </QRcodeBody>
        </QRcodeRoot>
    );
}

export default memo(QRcode);

const QRcodeRoot = styled.main``;

const QRcodeHeader = styled.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
    .ant-row {
        min-height: 294px;
    }
`;

const TitleRoot = styled(Title)`
    margin-bottom: 10px;
`;

const InputRoot = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    p {
        min-width: 80px;
        margin-right: 10px;
        margin-bottom: 0;
    }
    input {
        width: 170px;
    }
`;

const AlertRoot = styled(Alert)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
`;

const QRcodeBody = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;

const WackUp = styled.a`
    color: #000;
    display: inline-block;
    margin-bottom: 1em;
`;
