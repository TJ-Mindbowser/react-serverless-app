import { Form, Button, Input } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { validateMessages } from '../../helper/validation'
export default function Login({ onFinish, formRef, loading }) {
    useEffect(() => { }, [])
    return (
        <Form
            ref={formRef}
            onFinish={onFinish}>
            <Form.Item
                name='name'
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Please enter name"
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='password'
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Please enter Password",
                    }
                ]}
            >
                <Input type='Password' />
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                loading={loading}
            >
                Submit
            </Button>
        </Form>
    )
}
