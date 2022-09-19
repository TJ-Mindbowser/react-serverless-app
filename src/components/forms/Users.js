import { Form, Button, Input, TextArea } from 'antd'
import React from 'react'
import { useEffect } from 'react'
import { validateMessages } from '../../helper/validation'
export default function Users({ detail, onFinish, formRef, loading }) {
    useEffect(() => {
        setFormValues()
    }, [detail])

    const setFormValues = () => {
        formRef.current.setFieldsValue({ ...detail })
        // console.log("🚀 ~ file: Users.js ~ line 14 ~ setFormValues ~ formRef", formRef)
    }

    return (
        <Form
            ref={formRef}
            onFinish={onFinish} validateMessages={validateMessages}>
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
                name='phone'
                label="Number"
                rules={[
                    {
                        required: true,
                        message: "Please enter number",
                        pattern: new RegExp(/^[0-9]+$/)
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='address'
                label="Address"
                rules={[
                    {
                        required: true,
                        message: "Please Enter Address"
                    },
                ]}
            >
                <Input.TextArea />
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
