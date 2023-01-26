import '../styles.css'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className="authentication">
            <div className="authentication-form card p-4">
                <h2 className="card-title">Login Here...!</h2>
                <Form
                    style={{ width: '100%' }}
                    name="basic"
                    layout="vertical"
                    autoComplete="off"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            className="my-2"
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Link to="/register">
                    <p>Not a user yet? Register!</p>
                </Link>
            </div>
        </div>
    )
}

export default Login
