import { Button } from 'antd'
import '../styles.css'
import { Tabs } from 'antd'
import UnseenNotifications from '../components/UnseenNotifications'
import SeenNotifications from '../components/SeenNotifications'

const Notifications = () => {
    const onChange = (key) => {
        console.log(key)
    }

    const items = [
        {
            key: '1',
            label: `Unseen`,
            children: <UnseenNotifications />,
        },
        {
            key: '2',
            label: `Seen`,
            children: <SeenNotifications />,
        },
    ]

    return (
        <div>
            <div className="heading-div">
                <h3>Notifications</h3>
                <Button>Mark all as read</Button>
            </div>
            <div className="mt-2">
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    )
}

export default Notifications
