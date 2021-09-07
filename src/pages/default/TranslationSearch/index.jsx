import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '@reducers';

import { Form, Row, Col, Button, Input, List, Card, Divider, Alert, Spin } from 'antd';
import styled from 'styled-components';

import Title from '@component/atoms/Title';

import { translationSearchQuery } from '@apis/TranslationSearch';

const TitleData = [
    { title: '簡體中文' },
    { title: '英文' },
    { title: '越南文' },
    { title: '韓文' },
    { title: '泰文' },
    { title: '印尼文' },
    { title: '印地文' },
    { title: '日文' },
];

function TranslationSearch() {
    const [translationText, setTranslationText] = useState('');
    const [translationList, setTranslationList] = useState([]);
    const [copySuccess, setCopySuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const { setH1Title } = useContext(MyContext);

    useEffect(() => {
        setH1Title('翻譯搜尋');
    });

    function handleTranslationText(e) {
        setTranslationText(e.target.value);
    }

    async function handleTranslationSearch() {
        setLoading(true);
        setTranslationList([]);
        const translationSearchArray = await translationSearchQuery(translationText);
        if (translationSearchArray.status === 200) {
            setLoading(false);
            setTranslationList(translationSearchArray.data);
        }
    }

    function handleCopyText(text) {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => {
                setCopySuccess(false);
            }, 2000);
        });
    }

    return (
        <TranslationSearchRoot>
            {loading && (
                <SpinRoot>
                    <Spin size="large" />
                </SpinRoot>
            )}
            {copySuccess && <AlertSuccess type="success" message="複製成功" banner />}
            <TranslationSearchHeader>
                <Form>
                    <Row gutter={32}>
                        <Col span={10}>
                            <TitleRoot size={20} borderBottom>
                                搜尋字典檔
                            </TitleRoot>
                            <InputRoot>
                                <p>文字</p>
                                <Input
                                    size="small"
                                    type="text"
                                    value={translationText}
                                    onChange={handleTranslationText}
                                />
                            </InputRoot>
                        </Col>
                        <Col span={10} />
                        <Col span={4}>
                            <TitleRoot size={20} borderBottom>
                                功能
                            </TitleRoot>
                            <Button type="primary" size="large" block onClick={handleTranslationSearch}>
                                搜尋
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </TranslationSearchHeader>
            <TranslationSearchBody>
                {!!translationList &&
                    translationList.map((row, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Divider orientation="left">{row.data[1]}</Divider>
                                <List
                                    grid={{ gutter: 16, column: 3 }}
                                    dataSource={TitleData}
                                    renderItem={(item, index) => {
                                        return (
                                            <List.Item>
                                                <Card
                                                    title={item.title}
                                                    extra={
                                                        <Button
                                                            type="primary"
                                                            size="small"
                                                            block
                                                            onClick={() => handleCopyText(row.data[index + 1])}
                                                        >
                                                            複製
                                                        </Button>
                                                    }
                                                >
                                                    {row.data[index + 1]}
                                                </Card>
                                            </List.Item>
                                        );
                                    }}
                                />
                            </React.Fragment>
                        );
                    })}
            </TranslationSearchBody>
        </TranslationSearchRoot>
    );
}

export default TranslationSearch;

const TranslationSearchRoot = styled.main``;

const AlertSuccess = styled(Alert)`
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

const TranslationSearchHeader = styled.section`
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

const TranslationSearchBody = styled.section`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;
`;
