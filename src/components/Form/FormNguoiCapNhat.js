import React from 'react';
import { Button, Form, Space, Select, Card, Divider } from 'antd';

const FormNguoiCapNhat = () => {
    return (
        <Card>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout=""
            >
                <Form.Item label="Người cập nhật">
                    <Select showSearch>
                        <Select.Option value="">Giá trị rỗng</Select.Option>
                        <Select.Option value="TuanNV">TuanNV</Select.Option>
                        <Select.Option value="MinhHV">MinhHV</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
            <Divider />

            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'end' }}>
                <Button type="primary" htmlType="submit">
                    Cập nhật
                </Button>
            </Space>
        </Card>
    );
};

export default FormNguoiCapNhat;
