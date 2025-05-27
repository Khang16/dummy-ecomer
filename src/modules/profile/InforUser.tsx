import React from "react";
import { useState } from "react";
import { Avatar, Card, Col, Flex, InputNumber, Row, Slider, Spin,} from 'antd';
import type { InputNumberProps, } from 'antd';
import { UserOutlined, SafetyOutlined, BellOutlined, PayCircleOutlined } from '@ant-design/icons'
import { useProfile } from "./hooks/useProfile";

const InforUser: React.FC = () => {

  const { user, loading } = useProfile();
  const [inputValue, setInputValue] = useState(1);

  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };

  if (loading) return <Spin size="large" />;

  return (
    <Card style={{padding: "2rem", height: "max-content"}}>
      <div className="containerStyle">
        <Avatar size={250} className="avatarStyle">
          <img
            src={user?.image}
            alt="User Avatar"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </Avatar>
      </div>
      <h2 style={{textAlign: 'center', padding: '24px'}}>{user?.firstName} {user?.lastName}</h2>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={100}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
      <p>fullness of your prolife</p>
      <Card className="card-user-infor"  style={{marginBottom: '1rem'}}>
        <Flex align="center" gap={20}>
          <UserOutlined className="size-icon" style={{color: "blue"}}/>
          Personal Info
        </Flex>
      </Card>
      <Card className="card-user-infor" style={{marginBottom: '1rem'}}>
        <Flex align="center" gap={20}>
          <SafetyOutlined className="size-icon" style={{color: "green"}} />
          Security Settings
        </Flex>
        
      </Card>
      <Card className="card-user-infor" style={{marginBottom: '1rem'}}>
        <Flex align="center" gap={20}>
          <BellOutlined className="size-icon" style={{color: "red"}}/>
          Notifications
        </Flex>
      </Card>
      <Card className="card-user-infor" style={{marginBottom: '1rem'}}>
        <Flex align="center" gap={20}>
          <PayCircleOutlined className="size-icon" style={{color: 'orange'}}/>
          Payments
        </Flex>
      </Card>
    </Card>
  );
}

export default InforUser;
