import { Card, Form, Input, Spin } from "antd";
import React from "react";
import { useProfile } from "./hooks/useProfile";


const FormDisabledDemo: React.FC = () => {
  const { user, loading } = useProfile();


  if (loading) return <Spin size="large" />;

  return (
    <Card style={{ width: "100%" }}>
      <h1>Personal Info</h1>
      <div className="container-form">
        <Form
          className="form-text"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 21 }}
          layout="vertical"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            padding: "20px",
          }}
        >
          <Form.Item label="First Name">
            <Input value={user?.firstName} readOnly />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input value={user?.lastName} readOnly />
          </Form.Item>
          <Form.Item label="Gender">
            <Input value={user?.gender} readOnly />
          </Form.Item>
          <Form.Item label="Email">
            <Input value={user?.email} readOnly />
          </Form.Item>
          <Form.Item label="Blood Group">
            <Input value={user?.bloodGroup} readOnly />
          </Form.Item>
          <Form.Item label="Height (cm)">
            <Input value={user?.height} readOnly />
          </Form.Item>
          <Form.Item label="Weight (kg)">
            <Input value={user?.weight} readOnly />
          </Form.Item>
        </Form>
      </div>

      <h1>Address</h1>
      <Form
        className="form-text"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 21 }}
        layout="vertical"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          padding: "20px",
        }}
      >
        <Form.Item label="Country">
          <Input value={user?.address?.country} readOnly />
        </Form.Item>
        <Form.Item label="City">
          <Input value={user?.address?.city} readOnly />
        </Form.Item>
        <Form.Item label="Address">
          <Input value={user?.address?.address} readOnly />
        </Form.Item>
        <Form.Item label="Postal Code">
          <Input value={user?.address?.postalCode} readOnly />
        </Form.Item>
      </Form>
    </Card>
  );
};

const FormPage = () => <FormDisabledDemo />;
export default FormPage;