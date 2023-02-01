import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Space, Table, Divider, Image, Card, Form, Select } from 'antd';
import { MinusCircleOutlined, ArrowLeftOutlined, PlusOutlined, HistoryOutlined } from '@ant-design/icons';
import UploadImageForm from '~/components/Form/UploadImageForm';
const { Option } = Select;
const { TextArea } = Input;
const mydata = [
    {
        key: '1',
        STT: '1',
        shopName: 'Cửa hàng Con Cưng - 1 Phố Huế',
        shopOpentime: '9:00',
        shopClosetime: '21:00',
        shopTrademark: 'Ẩm thực',
        shopPhoneNumber: '18009194',
        shopAddress: 'Số 11, Đường Giải Phóng, Hoàng Mai, Hà Nội',
        shopShortAddress: 'Số 11',
        shopDescriptions:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock',
        shopLat: '#123445',
        shopLong: '#123445',
    },
];

const ChiTietShopPending = () => {
    const [shopInfomation, setShopInfomation] = useState(mydata[0]);
    const [editform, seteditform] = useState(false); //set editForm
    const [visible, setVisible] = useState(false); //set view ảnh
    const params = useParams();

    const navigate = useNavigate();

    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
        },
        {
            title: 'Người cập nhật',
            dataIndex: 'userUpdate',
            key: 'userUpdate',
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
            userUpdate: 'system',
            thoigian: '07:45:22 24/02/2022',
            noidung: 'Từ chối duyệt cửa hàng [Tên cửa hàng] - Lý do từ chối',
        },
        {
            key: '2',
            STT: '2',
            userUpdate: 'system',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
        {
            key: '3',
            STT: '3',
            userUpdate: 'system',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
        {
            key: '4',
            STT: '4',
            userUpdate: 'system',
            thoigian: '07:38:22 24/02/2022',
            noidung: 'Thêm mới cửa hàng [Tên cửa hàng] vào hệ thống',
        },
    ];
    const formItemLayout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 15,
        },
        labelAlign: 'left',
    };
    const toggleEditForm = () => {
        seteditform(!editform);
    };
    return (
        <>
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Card title="Thông tin chung">
                        <Row>
                            <Col span={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item className="form-item-custom" label="MCC:">
                                        <span className="ant-form-text">Mẹ và bé</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Terminal ID:">
                                        <span className="ant-form-text">MC-012313213</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Ngày cập nhật">
                                        <span className="ant-form-text">24/02/2022</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Ngày gửi duyệt">
                                        <span className="ant-form-text">24/02/2022</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Ngày từ chối duyệt:">
                                        <span className="ant-form-text">27/02/2022</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item className="form-item-custom" label="Merchant name">
                                        <span className="ant-form-text">Cửa hàng Con Cưng số 1 Phố Huế</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Merchant ID">
                                        <span className="ant-form-text">MID-1111</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Shop ID:">
                                        <span className="ant-form-text">12121</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Danh mục SES">
                                        <span className="ant-form-text">Gia đình</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card title="Thông tin SES">
                        <Row>
                            <Col span={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item className="form-item-custom" label="Tên shop:">
                                        <span className="ant-form-text">{shopInfomation.shopName}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Giờ mở cửa:">
                                        <span className="ant-form-text">{shopInfomation.shopOpentime}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Giờ đóng cửa:">
                                        <span className="ant-form-text">{shopInfomation.shopClosetime}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Thương hiệu:">
                                        <span className="ant-form-text">{shopInfomation.shopTrademark}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Số điện thoại:">
                                        <span className="ant-form-text">{shopInfomation.shopPhoneNumber}</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item className="form-item-custom" label="Địa chỉ chi tiết">
                                        <span className="ant-form-text">{shopInfomation.shopAddress}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Địa chỉ rút gọn:">
                                        <span className="ant-form-text">{shopInfomation.shopShortAddress}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Tỉnh/ Thành phố:">
                                        <span className="ant-form-text">Hà Nội</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Quận/ Huyện:">
                                        <span className="ant-form-text">Hoàng Mai</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Long:">
                                        <span className="ant-form-text">{shopInfomation.shopLong}</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Lat:">
                                        <span className="ant-form-text">{shopInfomation.shopLat}</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={24}>
                                <Form layout="vertical">
                                    <Form.Item label="Giới thiệu:">
                                        <span className="ant-form-text">{shopInfomation.shopDescriptions}</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={24}>
                                <Row gutter={[24, 24]}>
                                    <Col span={24} xl={8}>
                                        <Card className="card-center" title="Logo thương hiệu" size="small">
                                            <Image
                                                height={150}
                                                src="https://vnpay.vn/_nuxt/img/logo-primary.55e9c8c.svg"
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={24} xl={8}>
                                        <Card
                                            className="card-center"
                                            title="Ảnh chụp ngoài cửa hàng + Logo"
                                            size="small"
                                        >
                                            <Image
                                                height={150}
                                                src="https://odinland.com/wp-content/uploads/2020/07/cho-thue-van-phong-toa-nha-TDL-5-300x169.jpg"
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={24} xl={8}>
                                        <Card
                                            className="card-center"
                                            title="Ảnh chụp ngoài cửa hàng + Logo"
                                            size="small"
                                        >
                                            <Image
                                                height={150}
                                                src="https://www.hanoi-office.com/uploads/files/tdl 22 láng hạ/cua_vao_toa_nha_tdl_building.jpg"
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col span={24}>
                    <Card title="Lịch sử cập nhật">
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={24}>
                    <Space
                        wrap
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}
                    >
                        <Button
                            size="large"
                            icon={<ArrowLeftOutlined />}
                            onClick={() => {
                                navigate('./../..');
                            }}
                        >
                            Quay lại
                        </Button>
                    </Space>
                </Col>
            </Row>
        </>
    );
};

export default ChiTietShopPending;
