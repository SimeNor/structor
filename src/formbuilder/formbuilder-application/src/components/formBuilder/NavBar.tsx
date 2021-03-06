import React from 'react';
import { Button, Tooltip, Row, Col, Typography } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import './NavBar.css';

const { Title } = Typography;

function NavBar() {
    return (
        <div className="nav-bar">
            <Row>
                <Col span={1}>
                    <Tooltip title="Tilbake">
                        <Button
                            style={{
                                margin: '5px',
                                float: 'left',
                                color: '#FAFAFA',
                            }}
                            type="link"
                            shape="circle"
                            icon={<LeftOutlined />}
                            onClick={() => window.history.back()}
                        />
                    </Tooltip>
                </Col>
                <Col span={17}>
                    <Title
                        level={2}
                        style={{ color: '#FAFAFA', float: 'left' }}
                    >
                        Skjemabygger
                    </Title>
                </Col>
                <Col span={6}>
                    <div style={{ float: 'right' }}>
                        <Button
                            className="nav-button"
                            type="link"
                            size="large"
                            style={{ margin: '2px' }}
                            key="previewForm"
                        >
                            Forhåndsvisning
                        </Button>
                        <Button
                            className="nav-button"
                            type="link"
                            size="large"
                            style={{ margin: '2px 10px' }}
                            key="saveForm"
                        >
                            Lagre
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default NavBar;
