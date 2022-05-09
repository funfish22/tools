import React, { useState, useEffect, useContext, memo } from 'react';

import { MyContext } from '@reducers';

import { Form, Row, Col, Upload, message, Input, Button, Alert, Radio, Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import Title from '@component/atoms/Title';
import IconCard from '@component/molecules/IconCard';

const imgSize = [192, 192, 180, 144, 128, 120, 96];

function ResizeIcon() {
    const [imageUrl, setImageUrl] = useState('');
    const [webId, setWebId] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [resizeImg, setResizeImg] = useState(false);
    const [valueVersion, setValueVersion] = useState(1);
    const [bothVersion, setBothVersion] = useState(false);

    const { setH1Title } = useContext(MyContext);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上傳圖片</div>
        </div>
    );

    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);

        reader.onload = function () {
            const loadImgSize = new Image();
            loadImgSize.src = reader.result;
            if (loadImgSize.naturalWidth < imgSize[0] || loadImgSize.naturalHeight < imgSize[0]) {
                setAlertText(`圖片尺寸錯誤，請上傳${imgSize[0]}x${imgSize[0]}的圖片`);
                setAlert(true);
                setImageUrl('');
            }
            if (loadImgSize.naturalWidth !== loadImgSize.naturalHeight) {
                setAlertText(`圖片尺寸錯誤，請上傳${imgSize[0]}x${imgSize[0]}的圖片`);
                setAlert(true);
                setImageUrl('');
            }
        };

        setTimeout(() => {
            setAlert(false);
            setAlertText('');
        }, 2000);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('請上傳PNG檔!');
        }
        return isJpgOrPng;
    }

    function handleChange(info) {
        if (info.file.type === 'image/png') {
            getBase64(info.file.originFileObj, (imageUrl) => {
                setImageUrl(imageUrl);
            });
        }
    }

    function dummyRequest(info) {
        setTimeout(() => {
            info.onSuccess('ok');
        }, 0);
    }

    function handleChangeID(e) {
        setWebId(e.target.value);
    }

    function handleRenderImage() {
        if (!webId) {
            setAlertText('請輸入站點ID');
            setAlert(true);
        } else if (!imageUrl) {
            setAlertText('請上傳圖片');
            setAlert(true);
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

    function handleChangeVersion(e) {
        setValueVersion(e.target.value);
    }

    function handleBothVersion() {
        setValueVersion(1);
        setBothVersion(!bothVersion);
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
            if (bothVersion) {
                for (let j = 0; j < 2; j++) {
                    if (j === 0) {
                        name = document
                            .getElementById(`iconName${i + 1}`)
                            .textContent.replace('app_icon_', 'app_icon_effects_');
                    } else {
                        name = document.getElementById(`iconName${i + 1}`).textContent;
                    }
                    zip.file(name, src, { base64: true });
                }
            } else {
                name = document.getElementById(`iconName${i + 1}`).textContent;
                zip.file(name, src, { base64: true });
            }
        }
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            if (bothVersion) {
                saveAs(content, `${webId}站點 標準版、娛樂版APP ICON`);
                return;
            }
            if (valueVersion === 1) {
                saveAs(content, `${webId}站點 標準版APP ICON`);
            } else if (valueVersion === 2) {
                saveAs(content, `${webId}站點 娛樂版APP ICON`);
            }
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

    useEffect(() => {
        setH1Title('APP ICON 圖片尺寸調整工具');
    });

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
                                customRequest={dummyRequest}
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
                            <InputRoot>
                                <p>版本</p>
                                {!bothVersion && (
                                    <Radio.Group value={valueVersion} onChange={handleChangeVersion}>
                                        <Radio value={1}>標準版</Radio>
                                        <Radio value={2}>娛樂版</Radio>
                                    </Radio.Group>
                                )}
                                <Checkbox checked={bothVersion} onChange={handleBothVersion}>
                                    兩者
                                </Checkbox>
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
                                    size={[row, row]}
                                    src={resizeImageUrl(row)}
                                    version={valueVersion}
                                    webId={webId}
                                />
                            </Col>
                        ))}
                </Row>
            </ResizeIconBody>
        </ResizeIconRoot>
    );
}

export default memo(ResizeIcon);

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
        width: 192px;
        height: 192px;
        margin-bottom: 40px;
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

const ResizeIconBody = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;
