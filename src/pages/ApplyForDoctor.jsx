import { Col, Row, Button, Form, Input, Space, TimePicker } from 'antd'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { activateLoder, deactivateLoader } from '../redux/loadingSlice'
import { applyForDoctorService } from '../services/userService'
import '../styles.css'

const ApplyForDoctor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            dispatch(activateLoder())
            const response = await applyForDoctorService(values)
            dispatch(deactivateLoader())
            toast.success(response?.data?.message)
            navigate('/')
        } catch (error) {
            dispatch(deactivateLoader())
            toast.error(error.response.data.message)
        }
        console.log(values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
    }
    return (
        <div>
            <h3>Doctor registration</h3>
            <h5 className="mt-4">Personal Information</h5>
            <Form
                layout="vertical"
                style={{ width: '100%' }}
                name="basic"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Firstname"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Firstname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Lastname"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Lastname!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Phone Number"
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Phone Number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <h5 className="mt-4">Professional Information</h5>
                <Row>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Specialization"
                            name="specialization"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your Specialization!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Experience"
                            name="experience"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your experience!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Fees per consultation"
                            name="feePerConsultation"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Fees!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Availabile Hours"
                            name="availableHours"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your available hours!',
                                },
                            ]}
                        >
                            <TimePicker.RangePicker />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button className="my-4" type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ApplyForDoctor
