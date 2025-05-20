import React from 'react';
import VietNamFlag from '../../media/images/vietnam.png';
import EnglishFlag from '../../media/images/united-kingdom.png';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Card,
  Flex
} from 'antd';
import { countries } from 'countries-list';

const { Option } = Select;

const FormDisabledDemo: React.FC = () => {
  const countryList = Object.entries(countries).map(([code, country]) => ({
    code,
    name: country.name,
    flag: `https://flagcdn.com/${code.toLowerCase()}.svg`
  }));
  return (
    <Card style={{ width: '100%' }}>
      <h1>Personal Info</h1>
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
          <Form.Item label="Sex">
            <Select>
              <Select.Option value="demo">Male</Select.Option>
              <Select.Option value="demo">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Birthday">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Languages">
            <Select >
              <Select.Option value="language1">
                <Flex align='center' gap={5}>
                  <img src={VietNamFlag} alt='Vietnamese Flag' style={{ width: '1.5rem' }}></img>
                  Viet Nam
                </Flex>
              </Select.Option>
              <Select.Option value="language2">
                <Flex align='center' gap={5}>
                  <img src={EnglishFlag} alt="English Flag" style={{ width: '1.5rem' }} />
                  English
                </Flex>
              </Select.Option>
            </Select>
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
        <Form.Item label="Country" name="country">
          <Select
            showSearch
            placeholder="Select a country"
            optionFilterProp="children"
            filterOption={(input, option) => {
              const country = countryList.find(c => c.code === option?.value);
              return !!(
                country?.name.toLowerCase().includes(input.toLowerCase()) ||
                country?.code.toLowerCase().includes(input.toLowerCase())
              );
            }}
            filterSort={(optionA, optionB) => {
              const countryA = countryList.find(c => c.code === optionA.value)?.name || '';
              const countryB = countryList.find(c => c.code === optionB.value)?.name || '';
              return countryA.localeCompare(countryB);
            }}
          >
            {countryList.map((country) => (
              <Option
                key={country.code}
                value={country.code}
                label={country.name}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    style={{ width: '20px', height: '15px' }}
                  />
                  <span>{country.name}</span>
                </div>
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="City">
          <Input />
        </Form.Item>
        <Form.Item label="Address 1">
          <Input />
        </Form.Item>
        <Form.Item label="Address 2">
          <Input />
        </Form.Item>
      </Form>
    </Card>
  );
};

const FormPage = () => <FormDisabledDemo />;

export default FormPage;