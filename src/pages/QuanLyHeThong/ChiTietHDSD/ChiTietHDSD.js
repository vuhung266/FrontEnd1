import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Space, Table, Divider, Modal, message, Card, Form, Select } from 'antd';
import { ExclamationCircleFilled, ArrowLeftOutlined } from '@ant-design/icons';
import ShowConfirmResetPass from './ResetPass';
const { Option } = Select;

const mydata = [
    {
        key: '1',
        STT: '1',
        name: 'khoakd',
        email: 'khoakd@vnpay.vn',
        nhomquyen: 'SuperAdmin',
        isactive: 'hoatdong',
    },
    {
        key: '2',
        STT: '2',
        name: 'hieutn',
        email: 'hieunt3@vnpay.vn',
        nhomquyen: 'Admin',
        isactive: 'hoatdong',
    },
    {
        key: '3',
        STT: '3',
        name: 'linhtn',
        email: 'linhtn@vnpay.vn',
        nhomquyen: 'Guest',
        isactive: 'khoa',
    },
    {
        key: '4',
        STT: '4',
        name: 'nuctv',
        email: 'nucvv@vnpay.vn',
        nhomquyen: 'Guest',
        isactive: 'hoatdong',
    },
];

const QuanLyChiTietHDSD = () => {
    const [datauser, setDatauser] = useState(mydata);
    const [dataCurentUser, setDataCurentUser] = useState([]);
    const params = useParams();
    var result = datauser.filter((obj) => {
        return obj.email === params.id;
    });
    useEffect(() => {
        setDataCurentUser(result[0]);
    }, []);

    const [messageApi, contextHolder] = message.useMessage();
    const arr = Object.entries(dataCurentUser).map(([name, value]) => ({ name, value })); // chuyển về dạng key, val để đưa vào form edit
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log(values);
        setDataCurentUser(values);
        setOpen(false);
    };

    const { confirm } = Modal;
    const showConfirmLock = () => {
        confirm({
            title: 'Bạn chắc chắn muốn khóa người dùng này ?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                messageApi.info('Khóa người dùng thành công!');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const showConfirmUnlock = () => {
        confirm({
            title: 'Bạn chắc chắn muốn mở khóa người dùng này ?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                messageApi.info('Mở khóa người dùng thành công!');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Thời gian',
            dataIndex: 'thoigian',
            key: 'thoigian',
        },
        {
            title: 'Nội dung hoạt động',
            dataIndex: 'noidung',
            key: 'noidung',
        },
    ];
    const data = [
        {
            key: '1',
            STT: '1',
            thoigian: '07:45:22 24/02/2022',
            noidung: 'Từ chối duyệt cửa hàng [Tên cửa hàng] - Lý do từ chối',
        },
        {
            key: '2',
            STT: '2',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
        {
            key: '3',
            STT: '3',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
        {
            key: '4',
            STT: '4',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
    ];
    const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
            <Modal
                open={open}
                title="Sửa thông tin người dùng"
                okText="Cập nhật"
                cancelText="Hủy"
                onCancel={onCancel}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                            messageApi.open({
                                type: 'success',
                                content: 'Cập nhật thông tin thành công',
                            });
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    fields={arr}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    name="form_in_modal"
                    initialValues={{
                        modifier: 'public',
                    }}
                >
                    <Form.Item
                        name="name"
                        label="Tên người dùng"
                        rules={[
                            {
                                required: true,
                                message: 'Tên người dùng không được bỏ trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="nhomquyen" label="Nhóm quyền" rules={[{ required: true }]}>
                        <Select placeholder="Chọn nhóm quyền" allowClear>
                            <Option value="SuperAdmin">SuperAdmin</Option>
                            <Option value="Admin">Admin</Option>
                            <Option value="Guest">Guest</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
    return (
        <>
            {contextHolder}
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Card>
                        <Row gutter={[16, 16]}>
                            <Col span={4}>Tên người dùng:</Col>
                            <Col span={18}>
                                <b>{dataCurentUser.name}</b>
                            </Col>
                            <Col span={4}>Email</Col>
                            <Col span={18}>{dataCurentUser.email}</Col>
                            <Col span={4}>Nhóm quyền:</Col>
                            <Col span={18}>{dataCurentUser.nhomquyen}</Col>
                        </Row>
                        <Divider />

                        <Space direction="horizontal" style={{ width: '100%', justifyContent: 'end' }}>
                            <ShowConfirmResetPass data={dataCurentUser} />
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                Sửa thông tin
                            </Button>
                        </Space>
                    </Card>
                </Col>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }} />
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Button
                        icon={<ArrowLeftOutlined />}
                        onClick={() => {
                            navigate('/quan-ly-he-thong/quan-ly-nguoi-dung');
                        }}
                    >
                        Quay lại
                    </Button>
                </Col>
            </Row>
            <CollectionCreateForm
                open={open}
                onCreate={onCreate}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </>
    );
};

export default QuanLyChiTietHDSD;
