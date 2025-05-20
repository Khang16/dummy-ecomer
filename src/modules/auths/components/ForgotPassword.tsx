import { UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Title } = Typography;

const ForgotPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Thông tin đăng nhập:", values);
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Title level={3} className="login-title">
          <Link to='/auth/login'>&lt; Back</Link>
        </Title>
        <h1>Reset password</h1>
        <p>Enter your email address and we’ll send an verification code to reset your password</p>
        <Form
          name="loginForm"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ remember: true }}
          className="login-form"
        >
          <Form.Item
            name="username"
            label="Email"
            rules={[
              { required: true, message: "This field is required!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Send instructions
            </Button>
          </Form.Item>


        </Form>
      </Card>
    </div>
  );
};

export default ForgotPassword;
