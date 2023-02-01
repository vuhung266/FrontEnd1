import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Space, Table, Tooltip, Select, Modal, message, Form } from 'antd';
import { EyeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import http from '../../../utils/http'
import { addMenu, getMenu, updateMenu } from "../../../apis/menus.api";
import ShowConfirmResetPass from './ResetPass';
import ShowConfirmLockUser from './LockUser';
import { useQuery, useMutation } from 'react-query';

const QuanLyDanhMuc = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const addStudentMutation = useMutation({
        mutationFn: (body: FormStateType) => {
            return addMenu(body);
        },
    });
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        addStudentMutation.mutate(values, {
            onSuccess: () => {
                setIsModalOpen(false);
                setIsModalOpen(false);
                messageApi.open({
                    type: 'success',
                    content: 'Thêm mới thành công',
                });
            },
        });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns = [
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Thư mục cha',
            dataIndex: 'pid',
            key: 'pid',
        },
        {
            title: 'Thứ tự',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: `Action`,
            render: (e) => (
                <Space direction="vertical">
                    <Space wrap>
                        <Tooltip title="Xem chi tiết">
                            <Button
                                shape="circle"
                                icon={<EyeOutlined />}
                                onClick={() => {
                                    navigate(`/quan-ly-he-thong/quan-ly-nguoi-dung/chi-tiet/${e.email}`);
                                }}
                            />
                        </Tooltip>
                        <ShowConfirmLockUser data={e} />
                        <ShowConfirmResetPass type="icononly" data={e} />
                    </Space>
                </Space>
            ),
        },
    ];

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:4000/menus').then((res) => res.json()),
    );
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error has occurred</div>;

    console.log(data);
    const dataPid = data.map(({ key, name }) => ({
        value: key,
        label: name,
    }));
    const onCreate = (values) => onFinish(values);
    return (
        <>
            {contextHolder}
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
                                Thêm mới danh mục
                            </Button>
                        </Col>
                        <Col span={24}>
                            <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal
                open={isModalOpen}
                maskClosable={true}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={handleCancel}
                okText="Lưu lại"
                title="Thêm mới lý do từ chối duyệt"
            >
                <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
                    <Col span={24}>
                        <Form
                            form={form}
                            layout="vertical"
                            name="form_in_modal"
                            initialValues={{ modifier: 'public' }}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            labelAlign="left"
                        >
                            <Form.Item label="Tên danh mục" name="name" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Thứ tự" name="order" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Thư mục cha" name="pid" required={true}>
                                <Select showSearch allowClear options={dataPid} />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default QuanLyDanhMuc;
