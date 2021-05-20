import React, { useState, useEffect, useContext } from 'react';

import { MyContext } from '@reducers';

import { getBase64 } from '@utils/image';

import { Form, Row, Col, Upload, message, Input, Button, Radio, Divider, Alert, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import styled from 'styled-components';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

import Title from '@component/atoms/Title';
import IconCard from '@component/molecules/IconCard';

let num = 0;

function BatchImg() {
    const [fileList, setFileList] = useState([]);
    const [customizeSize, setCustomizeSize] = useState(2);
    const [customizeName, setCustomizeName] = useState(2);
    const [runSwitch, setRunSwitch] = useState(false);
    const [imageSize, setImageSize] = useState('');
    const [originalSize, setOriginalSize] = useState('');
    const [zipName, setZipName] = useState('');
    const [alert, setAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [firstImageSize, setFirstImageSize] = useState([]);

    const [multiple, setMultiple] = useState([2, 3, 3, 4]);

    const { setH1Title } = useContext(MyContext);

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上傳圖片</div>
        </div>
    );

    useEffect(() => {
        setH1Title('遊戲圖片批次產圖工具');

        if (fileList.length) {
            setFirstImageSize(fileList[0].qrCodeSize);
        }
    }, [setH1Title, fileList, firstImageSize, multiple]);

    async function beforeUpload(file) {
        setRunSwitch(false);
        const fileObject = {};
        const base64Img = await getBase64(file);
        const image = new Image();
        image.onload = () => {
            fileObject.qrCodeSize = [image.width, image.height];
            fileObject.resizeBase64Img = [];
            fileObject.copyResizeBase64Img = [];
            for (let i = 0; i < multiple.length; i++) {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const resizeImg = new Image();

                const width = Math.ceil((fileObject.qrCodeSize[0] / 4) * multiple[i]);
                const height = Math.ceil((fileObject.qrCodeSize[1] / 4) * multiple[i]);

                resizeImg.src = base64Img;
                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(resizeImg, 0, 0, width, height);
                const dataURL = canvas.toDataURL('image/png');
                fileObject.resizeBase64Img[i] = dataURL;
                fileObject.copyResizeBase64Img[i] = dataURL;
            }
        };
        image.src = base64Img;
        fileObject.base64Img = base64Img;
        fileObject.name = file.name;
        fileObject.copyName = file.name;

        const isJpgOrPng = file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('請上傳PNG檔!');
        }
        setFileList((before) => [...before, fileObject]);

        return isJpgOrPng ? true : Upload.LIST_IGNORE;
    }

    function onChange(info) {
        if (info.file.status === 'error') {
            num = num + 1;
            setAlert(true);
            setAlertText('上傳中');
        }
        if (num === info.fileList.length) {
            setAlert(false);
            setAlertText('');
        }
    }

    function handleChangeCustomize(e, block) {
        const value = e.target.value;
        if (block === 'name') setCustomizeName(value);
        if (block === 'size') setCustomizeSize(value);
        if (value === 2 && block === 'name') {
            fileList.map((row) => {
                return (row.name = row.copyName);
            });
        }
    }

    function handleChangeName(e, src) {
        const newFileList = fileList.filter((row) => {
            if (row.base64Img === src) {
                row.name = `${e.target.value}.png`;
            }
            return row;
        });
        if (e.key === 'Enter') setFileList(newFileList);
    }

    function handleRenderImage() {
        setRunSwitch(true);
        if (fileList.length === 0 && customizeSize === 1 && imageSize === '') {
            setAlertText('請先上傳圖標在設定尺寸');
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
                setAlertText('');
            }, 2000);
        }
    }

    function handleImageSize(e) {
        setImageSize(e.target.value);
        let newMultipleArray = [];
        let newMultiple = [];
        newMultipleArray = e.target.value.split(',').map(Number);
        newMultipleArray.forEach((row) => {
            newMultiple.push(row / 64);
        });
        setMultiple(newMultiple);
    }

    function handleOriginalSize(e) {
        const value = e.target.value;
        setOriginalSize(value);
    }

    // function handleMultiple(e) {
    //     if (e.key === 'Enter') {
    //         const oldMultiple = fileList[0].qrCodeSize;
    //         let newMultipleArray = [];
    //         let newMultiple = [];
    //         newMultipleArray = imageSize.split(',').map(Number);
    //         let smallSize = oldMultiple[0] / 4;
    //         newMultipleArray.forEach((row) => {
    //             newMultiple.push(row / smallSize);
    //         });
    //         setMultiple(newMultiple);

    //         const newFileList = fileList.map((row) => {
    //             row.resizeBase64Img = [];

    //             for (let i = 0; i < newMultiple.length; i++) {
    //                 const canvas = document.createElement('canvas');
    //                 const ctx = canvas.getContext('2d');
    //                 const resizeImg = new Image();

    //                 const width = Math.ceil(smallSize * newMultiple[i]);
    //                 const height = Math.ceil(smallSize * newMultiple[i]);

    //                 resizeImg.src = row.base64Img;
    //                 canvas.width = width;
    //                 canvas.height = height;

    //                 ctx.drawImage(resizeImg, 0, 0, width, height);
    //                 const dataURL = canvas.toDataURL('image/png');
    //                 row.resizeBase64Img[i] = dataURL;
    //                 row.copyResizeBase64Img[i] = dataURL;
    //             }
    //             return row;
    //         });
    //         setFileList(newFileList);
    //     }
    // }

    function handleChangeZipName(e) {
        setZipName(e.target.value);
    }

    function handleReset() {
        setFileList([]);
        setRunSwitch(false);
        setZipName('');
        setCustomizeSize(2);
        setCustomizeName(2);
        setMultiple([2, 3, 3, 4]);
    }

    function handleAlertClose() {
        setAlert(false);
    }

    function handleSave() {
        const folderName = zipName || '圖標';
        const zip = new JSZip();
        let src = '';
        let name = '';
        const img = zip.folder(folderName);
        for (let i = 0; i < multiple.length; i++) {
            for (let j = 0; j < fileList.length; j++) {
                src = fileList[j].resizeBase64Img[i].replace('data:image/png;base64,', '');
                name = fileList[j].name;
                switch (i) {
                    case 0:
                        const two = img.folder('2x');
                        two.file(name, src, { base64: true });
                        break;
                    case 1:
                        const three = img.folder('3x');
                        three.file(name, src, { base64: true });
                        break;
                    case 2:
                        const xxhdpi = img.folder('xxhdpi');
                        xxhdpi.file(name, src, { base64: true });
                        break;
                    case 3:
                        const xxxhdpi = img.folder('xxxhdpi');
                        xxxhdpi.file(name, src, { base64: true });
                        break;
                    default:
                        break;
                }
            }
        }
        // for (let i = 0; i < fileList.length; i++) {
        //     let folderName = fileList[i].name.replace('.png', '');
        //     name = fileList[i].name;
        //     var img = zip.folder(folderName);

        //     for (let j = 0; j < fileList[i].resizeBase64Img.length; j++) {
        //         src = fileList[i].resizeBase64Img[j].replace('data:image/png;base64,', '');
        //         // console.log('src', src);
        //         if (j === 0) {
        //             var two = img.folder('2x');
        //             two.file(name, src, { base64: true });
        //         }
        //         if (j === 1) {
        //             var three = img.folder('3x');
        //             three.file(name, src, { base64: true });
        //         }
        //         if (j === 2) {
        //             var xxhdpi = img.folder('xxhdpi');
        //             xxhdpi.file(name, src, { base64: true });
        //         }
        //         if (j === 3) {
        //             var xxxhdpi = img.folder('xxxhdpi');
        //             xxxhdpi.file(name, src, { base64: true });
        //         }
        //     }
        // }
        zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, folderName);
        });
    }

    return (
        <BatchImgRoot>
            {alert && <AlertRoot type="error" message={alertText} banner closable onClose={handleAlertClose} />}
            {alert && (
                <SpinRoot>
                    <Spin size="large" />
                </SpinRoot>
            )}
            <BatchImgHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                上傳圖片
                            </TitleRoot>
                            <UploadRoot
                                listType="picture-card"
                                showUploadList={false}
                                multiple={true}
                                beforeUpload={beforeUpload}
                                onChange={onChange}
                            >
                                {uploadButton}
                            </UploadRoot>
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
                                    {/* {customizeName === 1 && (
                                        <Input.TextArea
                                            rows={4}
                                            placeholder="多張圖片，請以 , 做區隔"
                                            style={{ resize: 'none', marginTop: '10px' }}
                                        />
                                    )} */}
                                </CustomizeRoot>
                            </InputRoot>
                            {/* <InputRoot>
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
                                        <Input
                                            placeholder="請輸入原始圖片尺寸，請以 , 做長寬區隔"
                                            style={{ resize: 'none', marginTop: '10px', width: '100%' }}
                                            value={originalSize}
                                            onChange={handleOriginalSize}
                                        />
                                    )}
                                    {customizeSize === 1 && (
                                        <Input.TextArea
                                            rows={3}
                                            placeholder="多尺寸，輸入寬度即可，程式會自動計算高度，請以 , 做區隔，輸入完畢請按下'Enter'鍵"
                                            style={{ resize: 'none', marginTop: '10px' }}
                                            value={imageSize}
                                            onChange={handleImageSize}
                                            // onKeyPress={handleMultiple}
                                        />
                                    )}
                                </CustomizeRoot>
                            </InputRoot> */}
                            <InputRoot>
                                <p>壓縮檔名稱</p>
                                <Input
                                    placeholder="請輸入壓縮檔名稱"
                                    size="small"
                                    value={zipName}
                                    onChange={handleChangeZipName}
                                />
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
            </BatchImgHeader>
            <BatchImgBody>
                <Row gutter={[16, 16]}>
                    {runSwitch &&
                        fileList.map((row, index) => {
                            return row.resizeBase64Img.map((row2, index2) => {
                                return (
                                    <React.Fragment key={row.name + index2}>
                                        {index2 === 0 && (
                                            <Col span={24}>
                                                <Divider>{row.copyName}</Divider>
                                            </Col>
                                        )}
                                        {index2 === 0 && customizeName === 1 ? (
                                            <Col span={12}>
                                                <Row align="middle">
                                                    <Col span={4}>
                                                        <p style={{ marginBottom: 0 }}>自定義名稱</p>
                                                    </Col>
                                                    <Col span={20}>
                                                        <Input
                                                            placeholder="輸入完成請按下'Enter'鍵"
                                                            onKeyPress={(e) => handleChangeName(e, row.base64Img)}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ) : null}
                                        {index2 === 0 && customizeSize === 1 ? (
                                            <Col span={12}>
                                                <Row align="middle">
                                                    <Col span={4}>
                                                        <p style={{ marginBottom: 0 }}>自定義尺寸</p>
                                                    </Col>
                                                    <Col span={20}>
                                                        <Input
                                                            placeholder="輸入完成請按下'Enter'鍵"
                                                            onKeyPress={(e) => handleChangeName(e, row.base64Img)}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        ) : null}
                                        {index2 === 0 && <Col span={24} style={{ padding: 0 }}></Col>}
                                        <Col span={6}>
                                            <IconCard
                                                id={index}
                                                src={row2}
                                                size={[
                                                    Math.ceil((row.qrCodeSize[0] / 4) * multiple[index2]),
                                                    Math.ceil((row.qrCodeSize[1] / 4) * multiple[index2]),
                                                ]}
                                                BatchImg
                                                name={row.name}
                                                multiple={multiple[index2]}
                                            />
                                        </Col>
                                    </React.Fragment>
                                );
                            });
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

const AlertRoot = styled(Alert)`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 51;
`;

const SpinRoot = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
`;
