
import { Route } from "react-router-dom";
import React, { useState } from 'react';
import { Fragment } from "react"

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';

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
       
        getItem('ADMIN', '1', <DesktopOutlined />),
        getItem('User', 'sub1', <UserOutlined />, [
          getItem('List User', '3'),
          getItem('Add User', '4'),
      
        ]),
        getItem('Films', 'sub2', <TeamOutlined />, [getItem('list film 1', '6'), getItem('add film 2', '8')]),
        
      ];


    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
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
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >

                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                minHeight: 360,
                            }}
                        >
                             <props.component {...propsRoute} />
                        </div>
                    </Content>
                  
                </Layout>
            </Layout>

           
        </Fragment>
    }} />
}