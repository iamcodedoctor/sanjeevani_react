import { List } from 'antd'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { seenNotificationsService } from '../services/userService'

const SeenNotifications = () => {
  const [notifications, setNotifications] = useState()
    const dispatch = useDispatch()
    const fetchUnseenNotifications = async () => {
        try {
            dispatch(activateLoder())
            const response = await seenNotificationsService({})
            setNotifications(response.data)
            console.log(response.data)
            dispatch(deactivateLoader())
        } catch (error) {
            dispatch(deactivateLoader())
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        fetchUnseenNotifications()
    }, [])


    const handleNotificationClick = async (id) => {
        console.log(id);
    }



    return (
        <div>
            <List
                size="large"
                bordered
                dataSource={notifications}
                renderItem={(item) => <List.Item onClick={() => handleNotificationClick(item._id)} style={{cursor:'pointer'}}>{item.text}</List.Item>}
            />
        </div>
    )
}

export default SeenNotifications
