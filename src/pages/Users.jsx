import { Button, Space, Table } from 'antd'
import React from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri'

const Users = () => {
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" danger>
                        <RiDeleteBin2Fill style={{ fontSize: '1.2rem' }} />
                    </Button>
                </Space>
            ),
        },
    ]

    const data = [
        {
            key: 1,
            username: 'John',
            email: 'john@mail.com',
            role: 'user',
        },
        {
            key: 1,
            username: 'Harry',
            email: 'harry@mail.com',
            role: 'user',
        },
    ]

    return (
        <div>
            <h3 className="mb-4">Users</h3>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: 200 }}
            />
        </div>
    )
}

export default Users
