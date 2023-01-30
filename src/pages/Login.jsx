import '../styles.css'
import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { loginUserService } from '../services/userService'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            dispatch(activateLoder())
            const response = await loginUserService(values)
            dispatch(deactivateLoader())
            toast.success('Login Successful :)')
            localStorage.clear()
            localStorage.setItem('token', response.token)
            navigate('/')
        } catch (error) {
            localStorage.clear()
            dispatch(deactivateLoader())
            toast.error(error.response.data.message)
        }
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
