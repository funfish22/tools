import React, { useState } from 'react';
import { Form, Row, Col, Upload, message, Input, Button, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import Title from '@component/atoms/Title';
import IconCard from '@component/molecules/IconCard';

const imgSize = [192, 180, 144, 128, 120, 96];

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('請上傳PNG檔!');
    }
    return isJpgOrPng;
}

function ResizeIcon() {
    const [imageUrl, setImageUrl] = useState('');
    const [webId, setWebId] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [resizeImg, setResizeImg] = useState(false);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上傳圖片</div>
        </div>
    );

    function handleChange(info) {
        if (info.file.type === 'image/png') {
            getBase64(info.file.originFileObj, (imageUrl) => {
                setImageUrl(imageUrl);
            });
        }
    }

    function handleChangeID(e) {
        setWebId(e.target.value);
    }

    function handleRenderImage() {
        const orig_src = document.querySelector('.ant-upload-select-picture-card img');
        if (!webId) {
            setAlertText('請輸入站點ID');
            setAlert(true);
        } else if (!imageUrl) {
            setAlertText('請上傳圖片');
            setAlert(true);
        } else if (orig_src.width < imgSize[0] || orig_src.height < imgSize[0]) {
            console.log('orig_src.width', orig_src.width);
            setAlertText(`圖片尺寸錯誤，請上傳${imgSize[0]}x${imgSize[0]}以上的圖片`);
            setAlert(true);
            setImageUrl('');
        } else {
            setResizeImg(true);
        }

        setTimeout(() => {
            setAlert(false);
            setAlertText('');
        }, 2000);
    }

    function handleAlertClose() {
        setAlert(false);
    }

    function handleReset() {
        setImageUrl('');
        setWebId('');
        setResizeImg(false);
    }

    function handleSave() {
        const zip = new JSZip();
        let src = '';
        let name = '';
        for (let i = 0; i < imgSize.length; i++) {
            src = document
                .getElementById(`resizeImg${i + 1}`)
                .getAttribute('src')
                .replace('data:image/png;base64,', '');
            name = document.getElementById(`iconName${i + 1}`).textContent;
            zip.file(name, src, { base64: true });
        }
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, `${webId}站點APP ICON`);
        });
    }

    function resizeImageUrl(size) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const resizeImg = new Image();

        resizeImg.src = imageUrl;
        canvas.width = size;
        canvas.height = size;

        ctx.drawImage(resizeImg, 0, 0, size, size);
        const dataURL = canvas.toDataURL('image/png');

        return dataURL;
    }

    return (
        <ResizeIconRoot>
            {alert && <AlertRoot type="error" message={alertText} banner closable onClose={handleAlertClose} />}
            <ResizeIconHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                上傳圖片
                            </TitleRoot>
                            <UploadRoot
                                listType="picture-card"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
                                ) : (
                                    uploadButton
                                )}
                            </UploadRoot>
                        </Col>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                圖片資訊
                            </TitleRoot>
                            <InputRoot>
                                <p>站點ID</p>
                                <Input size="small" type="number" value={webId} onChange={handleChangeID} />
                            </InputRoot>
                        </Col>
                        <Col span={4} style={{ display: 'flex', flexDirection: 'column' }}>
                            <TitleRoot size={20} borderBottom>
                                功能
                            </TitleRoot>
                            <Button type="primary" size="large" block onClick={handleRenderImage}>
                                執行圖片縮放
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
                                onClick={handleSave}
                            >
                                打包下載
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </ResizeIconHeader>
            <ResizeIconBody>
                <Row gutter={[16, 16]}>
                    {resizeImg &&
                        imgSize.map((row, index) => (
                            <Col span={6} key={row}>
                                <IconCard
                                    id={index}
                                    size={row}
                                    src={resizeImageUrl(row)}
                                    name={row !== 128 ? `app_icon_${row}x${row}.png` : `app_icon_${webId}.png`}
                                />
                            </Col>
                        ))}
                </Row>
            </ResizeIconBody>
        </ResizeIconRoot>
    );
}

export default ResizeIcon;

const ResizeIconRoot = styled.main``;

const ResizeIconHeader = styled.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`;

const UploadRoot = styled(Upload)`
    .ant-upload-select-picture-card {
        width: 234px;
        height: 234px;
        padding: 20px;
    }
`;

const TitleRoot = styled(Title)`
    margin-bottom: 10px;
`;

const InputRoot = styled.div`
    display: flex;
    align-items: center;
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

const ResizeIconBody = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;
