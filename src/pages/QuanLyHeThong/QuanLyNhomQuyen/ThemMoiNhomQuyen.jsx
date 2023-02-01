import React from 'react';
import { Tabs, Card, Divider, Button, Space, Row, Col, Form, Input } from 'antd';
import Tab1 from './Tab1';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store from '~/redux/store';
import { insert } from '~/redux/nhomQuyenSlice';

function ThemMoiNhomQuyen() {
	const [form] = Form.useForm();
	const dispatch = useDispatch;
    const navigate = useNavigate();
    const onChange = (key) => {
        console.log(key);
    };
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };
    const validateMessages = {
        required: `This field is required!`,
    };
	const saveData = (newData) => {
		store.dispatch(insert(newData));
		navigate('/quan-ly-he-thong/quan-ly-nhom-quyen')
	}
	const submitForm = async () => {
		try {
			const data = await form.validateFields();
			data.nhomquyen['key'] = Date.now() + Math.random()
			data.nhomquyen['isactive'] = 'hoatdong'
			saveData(data.nhomquyen);
		} catch (errorInfo) {
			console.log('Failed:', errorInfo);
		}
	}
    return (
        <>
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Card bordered={false}>
                        <Form {...layout} name="nest-messages" validateMessages={validateMessages} form={form} onFinish={submitForm}>
                            <Form.Item required name={['nhomquyen', 'tenhomquyen']} label="Tên nhóm quyền">
                                <Input />
                            </Form.Item>
                            <Form.Item required name={['nhomquyen', 'mota']} label="Mô tả">
                                <Input.TextArea />
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card bordered={false}>
                        <Tabs
                            defaultActiveKey="1"
                            onChange={onChange}
                            items={[
                                {
                                    label: `Quản lý cửa hàng`,
                                    key: '1',
                                    children: <Tab1 />,
                                },
                                {
                                    label: `Tham số hệ thống`,
                                    key: '2',
                                    children: `Tham số hệ thống`,
                                },
                                {
                                    label: `Báo cáo`,
                                    key: '3',
                                    children: `Báo cáo`,
                                },
                            ]}
                        />
                        <Divider />

                        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'end' }}>
                            <Button
                                size="large"
                                onClick={() => {
                                    navigate('/quan-ly-he-thong/quan-ly-nhom-quyen');
                                }}
                            >
                                Hủy
                            </Button>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                onClick={() => {
									submitForm() ;
                                }}
                            >
                                Lưu
                            </Button>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default ThemMoiNhomQuyen;
