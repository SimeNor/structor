import React from 'react';
import { Menu, Layout, Avatar } from 'antd';
import 'antd/dist/antd.css';
import Dashboard from '../Dashboard/Dashboard';
import MySchemas from '../MySchemas/MySchemas';
import MyPatients from '../MyPatients/MyPatients';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Content, Sider, Footer } = Layout;
const data = {
    items: [
        {
            id: 1,
            url: '/',
            title: 'Hjem',
        },
        {
            id: 3,
            url: '/Pasient',
            title: 'Finn en pasient ->',
        },
        {
            id: 4,
            url: '/Search',
            title: 'Filtrer på egenskaper',
        },
    ],
};

const Navigation = () => (
    <>
        <Layout>
            <Sider breakpoint="xs" collapsedWidth="0">
                <div className="logo">
                    <h1
                        style={{
                            color: 'white',
                            paddingLeft: 20,
                            paddingTop: 20,
                            marginBottom: 15,
                        }}
                    >
                        Datautforskeren
                    </h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {data.items.map(({ id, url, title }) => (
                        <MenuItem key={id}>
                            <Link to={url}> {title} </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        padding: 0,
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                        flexDirection: 'row',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        shape="square"
                        size="large"
                        src="https://i.pinimg.com/236x/6c/ab/cc/6cabccf7f0ebb599cb4fd1dd783877dd--wallpaper-house-gregory-house.jpg"
                    />
                    <h1
                        style={{
                            color: 'white',
                            paddingRight: 220,
                            paddingLeft: 20,
                        }}
                    >
                        Dr. Gregory House
                    </h1>
                </Header>
                <Header
                    className="patientHeader"
                    style={{
                        padding: 0,
                        position: 'fixed',
                        zIndex: 2,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        marginTop: 64,
                        backgroundColor: 'lightgrey',
                        height: 30,
                        borderBottom: 'solid grey 1px',
                    }}
                >
                    <p style={{ paddingRight: 200, paddingTop: 10 }}>
                        Du undersøker nå: Erling van de Weijer{' '}
                    </p>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="content">
                        <Switch>
                            <Route exact path={'/'} component={Dashboard} />
                            <Route exact path="/Skjema" component={MySchemas} />
                            <Route
                                exact
                                path="/Pasient"
                                component={MyPatients}
                            />
                        </Switch>
                    </div>
                </Content>
                <Footer />
            </Layout>
        </Layout>
    </>
);

export default withRouter(Navigation);
