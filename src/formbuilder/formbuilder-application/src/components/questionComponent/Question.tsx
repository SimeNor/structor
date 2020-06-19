import React from 'react';
import { Input,Row, Col, Button } from 'antd';
import { PlusOutlined,MoreOutlined } from '@ant-design/icons';
import './QuestionComponents.css';
const { TextArea } = Input;

function Question() {
    return (
        <div>
            <Row>
                <Col span ={23}>
                    <Row>
                        <Col span = {23} >
                            <div style={{ display: 'inline' }}>
                                <div style={{ width: '60%', display: 'inline-block', padding: '5px' }}>
                                    <TextArea
                                        rows = {2}
                                        placeholder="Spørsmål...."
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span = {23}>
                            <div style={{ display: 'inline' }}>
                                <div style={{ width: '60%', display: 'inline-block', padding: '5px' }}>
                                    <TextArea
                                        rows = {4}
                                        placeholder="Forklarende tekst....."
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={23}>
                            <Button
                                type="primary"
                                shape="circle"
                                style={{
                                    backgroundColor: '#A61E7B',
                                    borderColor: '#A61E7B',
                                }}
                                icon={<PlusOutlined />}
                                size="large"
                            />
                        </Col>
                    </Row>
                        {/*
                        AnswerComponent settes inn her for hvert spørsmål
                        <Row>
                            <Answer></Answer>
                        </Row>
                        */}
                        </Col>

                <Col span={1}>
                    <div style={{ display: 'inline' }}>
                        <Button
                            type="link"
                            shape="circle"
                            style={{ color: '#A61E7B' }}
                            icon={<MoreOutlined />}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Question;
