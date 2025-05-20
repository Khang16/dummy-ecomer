import React, { useState } from 'react';
import { Table, Button, Card, Space, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const testData = [
  { key: '1', name: 'ádasdasd', email: 'aádasdasd@gmail.com', country: 'Vietnam' },
  
];

export function ListUserPage() {
  const [users, setUsers] = useState(testData);

  const handleEdit = (key: string) => {
    message.info(`Editing user with key: ${key}`);
  };

  const handleDelete = (key:string) => {
    setUsers(users.filter(user => user.key !== key));
    message.success('User deleted successfully');
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: { key: string }) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record.key)} />
          <Popconfirm
            title="Bạn có định xóa người dùng này không?"
            onConfirm={() => handleDelete(record.key)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card style={{ width: '100%' }}>
      <h1>List User</h1>
      <Table columns={columns} dataSource={users} pagination={{ pageSize: 5 }} />
    </Card>
  );
}
