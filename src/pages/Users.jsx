import { Button, Space, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { listUsersService } from '../services/adminService'

const Users = () => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const handleDeleteUser = (id) => {
        console.log(id)
    }
    const listUsers = async () => {
        try {
            dispatch(activateLoder())
            const response = await listUsersService({})
            let users = response.data.map((user) => {
                return {
                    ...user,
                    key: user._id,
                }
            })
            setData(users)
            dispatch(deactivateLoader())
        } catch (error) {
            dispatch(deactivateLoader())
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        listUsers()
    }, [])

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
                        <RiDeleteBin2Fill style={{ fontSize: '1.2rem' }} onClick={(e)=> handleDeleteUser(record._id)}/>
                    </Button>
                </Space>
            ),
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
