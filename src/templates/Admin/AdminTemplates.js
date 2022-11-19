import { NavLink, Route } from "react-router-dom";
import React, { useState } from "react";
import { Fragment } from "react";
import { history } from '../../App'
import { Redirect } from 'react-router-dom';


import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    DatabaseOutlined,
    CalendarOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

export const AdminTemplate = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem(<NavLink to='/admin'>Admin Site</NavLink>, "1", <DesktopOutlined />),
        getItem("QL. Người dùng", "sub1", <UserOutlined />, [
            getItem(<NavLink to='/admin/users'>DS. Người dùng</NavLink>, "3"),
            getItem("Add User", "4"),
        ]),
        getItem("QL. Phim", "sub2", <DatabaseOutlined />, [
            getItem(<NavLink to='/admin/films'>DS. Phim</NavLink>, "6"),
            getItem(<NavLink to='/admin/films/addnew'>Thêm phim</NavLink>, "8"),
        ]),
        getItem(<NavLink to='/admin/films/showtime/:id'>Showtime</NavLink>, "9", <CalendarOutlined />)
    ];

    const accountInLocal = localStorage.userLogin;
    const parseAccount = JSON.parse(accountInLocal);

    if (!localStorage.getItem('access_token')) {
        alert('Bạn phải đăng nhập !');
        return <Redirect to='/login' />
    } else if (parseAccount.maLoaiNguoiDung !== 'QuanTri') {
        alert('Bạn không thể truy cập trang web này !');
        return <Redirect to='/' />
    }

    const clearlocalSto = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('userLogin');
        localStorage.removeItem('hasSeenAddToChromeNudge');
        history.push('/')
    }

    return (
        <Route
            exact
            path={props.path}
            render={(propsRoute) => {
                return (
                    <Fragment>
                        <Layout
                            style={{
                                minHeight: "100vh",
                            }}
                        >
                            <Sider
                                collapsible
                                collapsed={collapsed}
                                onCollapse={(value) => setCollapsed(value)}
                            >
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    defaultSelectedKeys={["1"]}
                                    mode="inline"
                                    items={items}
                                />
                            </Sider>
                            <Layout className="site-layout">
                                <Header
                                    className="site-layout-background"
                                    style={{
                                        padding: 0,
                                    }}
                                />
                                <Content
                                    style={{
                                        margin: "0 16px",
                                    }}
                                >
                                    <div
                                        className="site-layout-background"
                                        style={{
                                            padding: 24,
                                            minHeight: 360,
                                        }}
                                    >
                                        <div className="dropleft text-right">
                                            <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                                Xin chào {parseAccount.hoTen} <i className="fa-solid fa-circle-user"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#"><i className="fa-solid fa-pen-to-square"></i> Thông tin tài khoản</a>
                                                <button onClick={() => {
                                                    history.push('/')
                                                }} className="dropdown-item" href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i> Thoát trang admin</button>
                                                <button onClick={() => {
                                                    clearlocalSto()
                                                }} className="dropdown-item"><i className="fa-solid fa-right-from-bracket"></i> Đăng xuất</button>
                                            </div>
                                        </div>

                                        <props.component {...propsRoute} />
                                    </div>
                                </Content>
                            </Layout>
                        </Layout>
                    </Fragment>
                );
            }}
        />
    );
};
