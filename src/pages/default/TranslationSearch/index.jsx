import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '@reducers';

import { Form, Row, Col, Button, Input } from 'antd';
import styled from 'styled-components';

import Title from '@component/atoms/Title';

import { translationSearchQuery } from '@apis/TranslationSearch';

function TranslationSearch() {
    const [translationText, setTranslationText] = useState('');

    const { setH1Title } = useContext(MyContext);

    useEffect(() => {
        setH1Title('翻譯搜尋');
    });

    function handleTranslationText(e) {
        setTranslationText(e.target.value);
    }

    async function handleTranslationSearch() {
        const translationSearchArray = await translationSearchQuery(translationText);
        console.log('translationSearchArray', translationSearchArray);
    }

    return (
        <TranslationSearchRoot>
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
        </TranslationSearchRoot>
    );
}

export default TranslationSearch;

const TranslationSearchRoot = styled.main``;

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
