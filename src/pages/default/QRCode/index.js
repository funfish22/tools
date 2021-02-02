import React, { useEffect, useContext } from 'react';

import { MyContext } from '@reducers';

import { Form, Row, Col, Upload, message, Input, Button, Alert, Radio } from 'antd';

import styled from 'styled-components';

import Title from '@component/atoms/Title';

function QRcode() {
    const { setH1Title } = useContext(MyContext);

    useEffect(() => {
        setH1Title('QR CODE 圖片調整工具');
    });

    return (
        <QRcodeRoot>
            <QRcodeHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                上傳圖片
                            </TitleRoot>
                        </Col>
                    </Row>
                </Form>
            </QRcodeHeader>
        </QRcodeRoot>
    );
}

export default QRcode;

const QRcodeRoot = styled.main``;

const QRcodeHeader = styled.section`
    padding: 30px 0;
    background-color: #ccc;

    form {
        max-width: 1000px;
        margin: 0 auto;
    }
`;

const TitleRoot = styled(Title)`
    margin-bottom: 10px;
`;
