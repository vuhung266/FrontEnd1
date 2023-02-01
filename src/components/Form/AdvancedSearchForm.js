import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Space, Table, Select, Card, Divider, Grid } from 'antd';
import { EditOutlined, SearchOutlined } from '@ant-design/icons';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
const { useBreakpoint } = Grid;

const AdvancedSearchForm = ({ dataForm, extraButton }) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const itemShow = screens.md ? 6 : 2 

  const getFields = () => {
    const count = expand ? 100 : itemShow;
    const children = [];
    dataForm.map((item, i) => {
      children.push(
        <Col span={24} md={12} xxl={8} key={i} style={{ display: i >= count ? 'none' : '' }}>
          <Form.Item
            style={{ margin: 0 }}
            {...item.formItemProp}
          >
            {item.form}
          </Form.Item>
        </Col>,
      );
    })
    return children;
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Card bordered={false} >
      <Form form={form} name="advanced_search" className="ant-advanced-search-form" onFinish={onFinish}>
        <Row gutter={[24, 24]}>{getFields()}</Row>
        <Divider />

        <Space
          align='center'
          wrap
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <Button type="primary" htmlType="submit">
            <SearchOutlined />
            Tìm kiếm
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Xoá các trường bộ lọc
          </Button>
          {extraButton}
          {dataForm.length > 6 ? (
            <Button
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />}
              {expand ? 'Ẩn bớt bộ lọc' : `Mở rộng bộ lọc (+${ dataForm.length - itemShow })`}
            </Button>
          ) : ''}
        </Space>
      </Form>
    </Card>
  );
};

export default AdvancedSearchForm