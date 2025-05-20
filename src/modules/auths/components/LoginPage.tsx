import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuths';

export const LoginPage: React.FC = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/user/list-user');
    }
  }, [user, navigate]);

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    const result = await login(values.username, values.password);
    setLoading(false);
  
    if (result.success) {
      message.success('Đăng nhập thành công!');
      navigate('/user/list-user');
    } else {
      message.error(result.error || 'Đăng nhập thất bại');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto' }}>
      <Card title="Đăng nhập">
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};