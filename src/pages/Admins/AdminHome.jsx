import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState, Component } from 'react';
import { NavLink } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(<NavLink to='/admin'>Admin Site</NavLink>),
    getItem('QL.Người dùng', 'sub1', <UserOutlined />, [
        getItem('DS.Người dùng', '3'),
        getItem('Thêm người dùng', '4')
    ]),
    getItem('QL.Phim', 'sub2', <TeamOutlined />, [getItem(<NavLink to='/admin/films'>DS.Phim</NavLink>, '6'), getItem('Thêm phim', '7')]),
    getItem('Lịch chiếu', '9', <FileOutlined />),
];
const AdminHome = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                {/* <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                /> */}
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                   {/* <Component {...propsRoute} /> */}
                </Content>

            </Layout>
        </Layout>
    );
};
export default AdminHome;