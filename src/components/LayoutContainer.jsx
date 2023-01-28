import '../styles.css'
import {
    HeartOutlined,
} from '@ant-design/icons'
import {
    RiHome8Line,
    RiNotification2Line,
    RiUserLine,
    RiLoginCircleLine,
    RiHealthBookLine,

} from 'react-icons/ri'
import {
    FaUserMd
} from 'react-icons/fa'
import {
    TbUsers
} from 'react-icons/tb'
import { Layout, Menu, theme, Badge } from 'antd'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux'
const { Header, Content, Footer, Sider } = Layout
const LayoutContainer = () => {
    const { user } = useSelector((state) => state.auth)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const navigate = useNavigate()
    const userItems = [
        {
            label: 'Home',
            key: '/',
            icon: <RiHome8Line />,
        },
        {
            label: 'Appointment',
            key: '/appointments',
            icon: <RiHealthBookLine />,
        },
        {
            label: 'Profile',
            key: '/profile',
            icon: <RiUserLine />,
        },
        {
            label: 'Log Out',
            key: '/logout',
            icon: <RiLoginCircleLine />,
        },
    ]
    const adminItems = [
        {
            label: 'Home',
            key: '/',
            icon: <RiHome8Line />,
        },
        {
            label: 'Users',
            key: '/users',
            icon: <TbUsers />,
        },
        {
            label: 'Doctors',
            key: '/doctors',
            icon: <FaUserMd />,
        },
        {
            label: 'Profile',
            key: '/profile',
            icon: <RiUserLine />,
        },
        {
            label: 'Log Out',
            key: '/logout',
            icon: <RiLoginCircleLine />,
        },
    ]

    const doctorItems = [
        {
            label: 'Home',
            key: '/',
            icon: <RiHome8Line />,
        },
        {
            label: 'Appointment',
            key: '/confirmAppointments',
            icon: <RiHealthBookLine />,
        },
        {
            label: 'Profile',
            key: '/profile',
            icon: <RiUserLine />,
        },
        {
            label: 'Log Out',
            key: '/logout',
            icon: <RiLoginCircleLine />,
        },
    ]

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                width={280}
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
                    <div className="logo-text">
                        <HeartOutlined
                            style={{
                                fontSize: '1.8rem',
                                marginRight: '10px',
                                color: 'white',
                            }}
                        />
                        <h3 style={{ fontSize: '1.8 rem', marginBottom: 0 }}>
                            Sanjeevani
                        </h3>
                    </div>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                    items={user?.role === 'admin' ? adminItems : user?.role === 'doctor' ? doctorItems : userItems}
                ></Menu>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className="layout-header">
                        <h3 style={{ marginBottom: 0 }}>
                            Welcome {user?.username}
                        </h3>
                        <div>
                            <Badge count={4}>
                                <RiNotification2Line
                                    style={{
                                        fontSize: '1.2rem',
                                    }}
                                />
                            </Badge>
                        </div>
                    </div>
                </Header>
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
                        <Outlet />
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
