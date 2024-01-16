import React from 'react';
import { Button, Form, Input } from 'antd';
import '../common.css'
import { Link } from 'react-router-dom';

const SignIn = () => {
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
                    <h1>Sign Up</h1>
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username',
                            },
                        ]}
                    >
                        <Input
                            placeholder="username" />
                    </Form.Item>
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

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button  htmlType="submit" className="login-form-button buttonColor" >
                            Sign Up
                        </Button>
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        Already have an account? <Link to="/Login">Sign Up</Link>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
