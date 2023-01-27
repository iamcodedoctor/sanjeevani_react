import "../styles.css"
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React from 'react'
const { Header, Content, Footer, Sider } = Layout
const LayoutContainer = ({children}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    return (
        <Layout style={{height:'100vh'}}>
            <Sider
                className="layout-sider"
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    // console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                    // console.log(collapsed, type)
                }}
            >
                <div className="layout-logo">
                    <h3>Sanjeevani</h3>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[
                        UserOutlined,
                        VideoCameraOutlined,
                        UploadOutlined,
                        UserOutlined,
                    ].map((icon, index) => ({
                        key: String(index + 1),
                        icon: React.createElement(icon),
                        label: `nav ${index + 1}`,
                    }))}
                />
            </Sider>
            <Layout>
                {/* <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div>
                        <h1>
                            Sanjeevani
                        </h1>
                        
                    </div>
                </Header> */}
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}
export default LayoutContainer
