import React, { useState, useEffect, useContext, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { MyContext } from '@reducers';

import { Form, Row, Col, Button, Input, List, Card, Divider, Alert, Spin, Checkbox, Radio } from 'antd';
import styled from 'styled-components';

import Title from '@component/atoms/Title';

import { translationSearchQuery } from '@apis/TranslationSearch';

const CheckboxGroup = Checkbox.Group;

const TitleData = [
    { title: '簡體中文 zh-CN' },
    { title: '英文 en-US' },
    { title: '越南文 vi-VN' },
    { title: '韓文 ko-KR' },
    { title: '泰文 th-TH' },
    { title: '印尼文 in-ID' },
    { title: '印地文 hi-IN' },
    { title: '日文 ja-JP' },
];

const TitleDataOptions = TitleData.map((row) => row.title);

function TranslationSearch() {
    const history = useHistory();

    const [translationText, setTranslationText] = useState('');
    const [translationList, setTranslationList] = useState([]);
    const [conversion, setConversion] = useState('');
    const [match, setMatch] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const [checkedList, setCheckedList] = useState(TitleDataOptions);
    const [listStyle, setListStyle] = useState(1);

    const { setH1Title, loginStatus } = useContext(MyContext);

    useEffect(() => {
        setH1Title('翻譯搜尋');
        if (!loginStatus) history.push('/');

        if (!!sessionStorage.listStyle === true) {
            sessionStorage.listStyle === '1' ? setListStyle(1) : setListStyle(0);
        }
    }, [setH1Title, loginStatus, history]);

    function handleTranslationText(e) {
        setTranslationText(e.target.value);
    }

    async function handleTranslationSearch() {
        setLoading(true);
        setTranslationList([]);
        const translationSearchArray = await translationSearchQuery(translationText, conversion, match);
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

    function handleChangeConversion(e) {
        if (e.target.checked) setConversion('conversion');
        else setConversion('');
    }

    function handleChangeMatch(e) {
        if (e.target.checked) setMatch('match');
        else setMatch('');
    }

    function onCheckAllChange(e) {
        setCheckedList(e.target.checked ? TitleDataOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    }

    function onChange(list) {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < TitleDataOptions.length);
        setCheckAll(list.length === TitleDataOptions.length);
    }

    function onChangeListStyle(e) {
        setListStyle(e.target.value);
        sessionStorage.setItem('listStyle', e.target.value);
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
                        <Col span={7}>
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
                        <Col span={6}>
                            <TitleRoot size={20} borderBottom>
                                篩選功能
                            </TitleRoot>
                            <Checkbox onChange={handleChangeConversion}>大小寫需相符</Checkbox>
                            <br />
                            <Checkbox onChange={handleChangeMatch}>內容需相符</Checkbox>
                            <br />
                            <Radio.Group onChange={onChangeListStyle} value={listStyle}>
                                <Radio value={1}>卡片模式</Radio>
                                <Radio value={0}>列表模式</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={7}>
                            <TitleRoot size={20} borderBottom>
                                語系選擇
                            </TitleRoot>
                            <Row>
                                <Col span={24}>
                                    <Checkbox
                                        indeterminate={indeterminate}
                                        onChange={onCheckAllChange}
                                        checked={checkAll}
                                    >
                                        全選
                                    </Checkbox>
                                </Col>
                                <CheckboxGroup onChange={onChange} value={checkedList}>
                                    <Row>
                                        {TitleDataOptions.map((row, index) => {
                                            return (
                                                <Col span={12} key={index}>
                                                    <Checkbox value={row}>{row}</Checkbox>
                                                </Col>
                                            );
                                        })}
                                    </Row>
                                </CheckboxGroup>
                            </Row>
                        </Col>
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
                                <ListRoot
                                    grid={listStyle && { gutter: 16, column: 3 }}
                                    dataSource={TitleData}
                                    size={!listStyle && 'small'}
                                    renderItem={(item, index) => {
                                        return checkedList.includes(item.title) ? (
                                            <List.Item
                                                actions={
                                                    !listStyle && [
                                                        <Button
                                                            type="primary"
                                                            size="small"
                                                            block
                                                            onClick={() => handleCopyText(row.data[index + 1])}
                                                        >
                                                            複製
                                                        </Button>,
                                                    ]
                                                }
                                            >
                                                {listStyle ? (
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
                                                ) : (
                                                    <List.Item.Meta
                                                        title={item.title}
                                                        description={row.data[index + 1]}
                                                    />
                                                )}
                                            </List.Item>
                                        ) : (
                                            <></>
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

export default memo(TranslationSearch);

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

const ListRoot = styled(List)`
    .ant-row > div:empty {
        width: 0px !important;
    }
    li.ant-list-item {
        background-color: #fff;
    }
`;
