import React from 'react';
import { Button, Form, Input } from 'antd';
import '../common.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div className="container">
            <div className="box">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ padding: '1% 3%' }}
                >
                    <h1>Login</h1>
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    {/* <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item> */}

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button  htmlType="submit" className="login-form-button buttonColor">
                            Log in
                        </Button>
                    </Form.Item>
                    <Form.Item style={{ textAlign: "center" }}>
                    Or <Link to="/SignIn" >register now!</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
