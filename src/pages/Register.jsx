import '../styles.css'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { registerUserService } from '../services/userService'
import { toast } from 'react-hot-toast'

const Register = () => {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        if (values.password === values.confirmPassword) {
            try {
                const response = await registerUserService(values)
                toast.success(response.message)
                toast.success('Redirecting to Login Page')
                navigate('/login')
            } catch (error) {
                toast.error(error.response.data.message)
            }
        } else {
            toast.error('Passwords do not match')
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className="authentication">
            <div className="authentication-form card p-4">
                <h2 className="card-title">Register Here...!</h2>
                <Form
                    style={{ width: '100%' }}
                    name="basic"
                    layout="vertical"
                    autoComplete="off"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

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
                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password again!',
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
                <Link to="/login">
                    <p>Already a user, Login Here!</p>
                </Link>
            </div>
        </div>
    )
}

export default Register
