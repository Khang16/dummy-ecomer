
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input
} from 'antd';

export function CreateUserPage() {
  return (
    <>
      <Card style={{ width: '100%' }}>
        <h1>Create User</h1>
        <div className='container-form'>
          <Form className='form-text'
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 21 }}
            layout="vertical"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', padding: '20px' }}
          >
            <Form.Item label="First Name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item label="Nickname">
              <Input />
            </Form.Item>
            <Form.Item label="Birthday">
              <DatePicker />
            </Form.Item>
            <Form.Item label="Phone">
              <Input type='number' />
            </Form.Item>
            <Form.Item label="Email">
              <Input type='email' />
            </Form.Item>


          </Form>
        </div>

        <h1>Address</h1>
        <Form className='form-text'
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 21 }}
          layout="vertical"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', padding: '20px' }}>
          
          <Form.Item label="City">
            <Input />
          </Form.Item>
          <Form.Item label="District">
            <Input />
          </Form.Item>
          <Form.Item label="Address">
            <Input />
          </Form.Item>
        </Form>

        <Button style={{backgroundColor: '#4096FF', color: 'white'}}>Save</Button>
      </Card>
    </>
  )
}