import React, { useState, useEffect, useContext } from 'react';

import { MyContext } from '@reducers';

import { Form, Row, Col, Upload, message, Modal, Input, Button, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import Title from '@component/atoms/Title';
import IconCard from '@component/molecules/IconCard';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

function BatchImg() {
    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setpreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [customizeSize, setCustomizeSize] = useState(2);
    const [customizeName, setCustomizeName] = useState(2);
    const [runSwitch, setRunSwitch] = useState(false);
    const [qrCodeSize, setQrCodeSize] = useState('');

    const multiple = [2, 3, 4, 4];

    const { setH1Title } = useContext(MyContext);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上傳圖片</div>
        </div>
    );

    useEffect(() => {
        setH1Title('遊戲圖片批次產圖工具');
    });

    async function handleChange({ fileList }) {
        const newFileList = await Promise.all(
            fileList.map(async (row) => {
                row.preview = await getBase64(row.originFileObj);
                const image = new Image();
                image.onload = () => {
                    row.qrCodeSize = [image.width, image.height];
                };
                image.src = row.preview;
                return row;
            })
        );
        setFileList(newFileList);
    }

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('請上傳PNG檔!');
        }
        return isJpgOrPng ? true : Upload.LIST_IGNORE;
    }

    function handleCancel() {
        setPreviewVisible(false);
    }

    async function handlePreview(file) {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
            const image = new Image();
            image.onload = () => {
                file.qrCodeSize = [image.width, image.height];
            };
            image.src = file.preview;
        }
        setpreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    }

    function handleChangeCustomize(e, block) {
        const value = e.target.value;
        if (block === 'name') setCustomizeName(value);
        if (block === 'size') setCustomizeSize(value);
    }

    async function handleRenderImage() {
        setRunSwitch(true);
    }

    function resizeImageUrl(target, size) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const resizeImg = new Image();

        const width = (target.qrCodeSize[0] / 4) * size;
        const height = (target.qrCodeSize[1] / 4) * size;

        resizeImg.src = target.preview;
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(resizeImg, 0, 0, width, height);
        const dataURL = canvas.toDataURL('image/png');

        return dataURL;
    }

    function handleQrCodeSize(e) {
        setQrCodeSize(e.target.value);
    }

    return (
        <BatchImgRoot>
            <BatchImgHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                上傳圖片
                            </TitleRoot>
                            <UploadRoot
                                listType="picture-card"
                                multiple={true}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                                onPreview={handlePreview}
                                fileList={fileList}
                            >
                                {uploadButton}
                            </UploadRoot>
                            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </Col>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                圖片資訊
                            </TitleRoot>
                            <InputRoot>
                                <p>自定義名稱</p>
                                <CustomizeRoot>
                                    <Radio.Group
                                        value={customizeName}
                                        onChange={(e) => handleChangeCustomize(e, 'name')}
                                    >
                                        <Radio value={1}>是</Radio>
                                        <Radio value={2}>否</Radio>
                                    </Radio.Group>
                                    {customizeName === 1 && (
                                        <Input.TextArea
                                            rows={4}
                                            placeholder="多張圖片，請以 , 做區隔"
                                            style={{ resize: 'none', marginTop: '10px' }}
                                        />
                                    )}
                                </CustomizeRoot>
                            </InputRoot>
                            <InputRoot>
                                <p>自定義尺寸</p>
                                <CustomizeRoot>
                                    <Radio.Group
                                        value={customizeSize}
                                        onChange={(e) => handleChangeCustomize(e, 'size')}
                                    >
                                        <Radio value={1}>是</Radio>
                                        <Radio value={2}>否</Radio>
                                    </Radio.Group>
                                    {customizeSize === 1 && (
                                        <Input.TextArea
                                            rows={3}
                                            placeholder="多尺寸，輸入寬度即可，程式會自動計算高度，請以 , 做區隔"
                                            style={{ resize: 'none', marginTop: '10px' }}
                                            value={qrCodeSize}
                                            onChange={handleQrCodeSize}
                                        />
                                    )}
                                </CustomizeRoot>
                            </InputRoot>
                        </Col>
                        <Col span={4} style={{ display: 'flex', flexDirection: 'column' }}>
                            <TitleRoot size={20} borderBottom>
                                功能
                            </TitleRoot>
                            <Button type="primary" size="large" block onClick={handleRenderImage}>
                                執行圖片縮放
                            </Button>
                            <Button type="danger" size="large" block style={{ marginTop: '10px' }}>
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
                            <Button type="primary" size="large" block style={{ marginTop: '10px' }}>
                                打包下載
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </BatchImgHeader>
            <BatchImgBody>
                <Row gutter={[16, 16]}>
                    {runSwitch &&
                        fileList.map((row) => {
                            return (
                                multiple &&
                                multiple.map((row2, index2) => {
                                    return (
                                        <Col span={6}>
                                            <IconCard
                                                id={`${row.originFileObj.name}${index2}`}
                                                size={(row.qrCodeSize[0] / 4) * row2}
                                                src={resizeImageUrl(row, row2)}
                                            />
                                        </Col>
                                    );
                                })
                            );
                        })}
                </Row>
            </BatchImgBody>
        </BatchImgRoot>
    );
}

export default BatchImg;

const BatchImgRoot = styled.main``;

const BatchImgHeader = styled.section`
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

const UploadRoot = styled(Upload)`
    .ant-upload-list-item {
        border-color: #d9d9d9;
        background: #fff;
    }
    .ant-tooltip {
        display: none;
    }
    .ant-upload-list {
        max-height: 223px;
        overflow: hidden;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
            background-color: #ccc;
        }
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
            background-color: #ccc;
            border-radius: 10px;
        }
        /*滚动条的滑块按钮*/
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #001529;
            box-shadow: inset 0 0 5px #000;
        }
    }
`;

const InputRoot = styled.div`
    display: flex;
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

const CustomizeRoot = styled.div``;

const BatchImgBody = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;
