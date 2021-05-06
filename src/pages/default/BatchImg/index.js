import React, { useEffect, useContext } from 'react';

import { MyContext } from '@reducers';

import { Form, Row, Col } from 'antd';

import styled from 'styled-components';

import Title from '@component/atoms/Title';

function BatchImg() {
    const { setH1Title } = useContext(MyContext);

    useEffect(() => {
        setH1Title('遊戲圖片批次產圖工具');
    });

    return (
        <BatchImgRoot>
            <BatchImgHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                上傳圖片
                            </TitleRoot>
                        </Col>
                    </Row>
                </Form>
            </BatchImgHeader>
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
`;

const TitleRoot = styled(Title)`
    margin-bottom: 10px;
`;
