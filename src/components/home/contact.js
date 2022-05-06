import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  FormOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

export default function AppContact() {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please input your telephone!",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Telephone"
            />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Input
              prefix={<FormOutlined className="site-form-item-icon" />}
              placeholder="Subject"
            />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Please input your Message!",
              },
            ]}
          >
            <TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="agreeterm" valuePropName="checked" noStyle>
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
