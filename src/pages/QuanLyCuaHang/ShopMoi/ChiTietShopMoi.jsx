import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Button,
    Input,
    Row,
    Col,
    Space,
    Table,
    Divider,
    Image,
    Card,
    Form,
    Select,
    Upload,
    Modal,
    TimePicker,
    Grid,
} from 'antd';
import { MinusCircleOutlined, ArrowLeftOutlined, PlusOutlined, HistoryOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import dayjs from 'dayjs';
import UploadImageForm from '~/components/Form/UploadImageForm';
import FormNguoiCapNhat from '~/components/Form/FormNguoiCapNhat';
const { Option } = Select;
const { TextArea } = Input;
const { useBreakpoint } = Grid;
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

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const ChiTietShopMoi = () => {
    const [shopInfomation, setShopInfomation] = useState(mydata[0]);
    const [editform, seteditform] = useState(false); //set editForm
    const [visible, setVisible] = useState(false); //set view ảnh
    const params = useParams();

    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState('');
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('');

    const [fileLogo, setFileLogo] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
        },
    ]);
    const [fileList, setFileList] = useState([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
        },
    ]);
    const HandleUpdateLogo = ({ fileList: newFileList }) => {
        setFileLogo(newFileList);
    };
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handlePreviewCancel = () => {
        setPreviewOpen(false);
    };
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
    const screens = useBreakpoint();
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 18,
        },
        labelAlign: 'left',
    };
    const formShopTimeOpenLayout = {
        labelCol: {
            span: 12,
        },
        wrapperCol: {
            span: 12,
        },
        labelAlign: screens.md ? 'right' : 'left',
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
                            <Col xs={24} xl={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item className="form-item-custom" label="MCC:">
                                        <span className="ant-form-text">Mẹ và bé</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Terminal ID:">
                                        <span className="ant-form-text">MC-012313213</span>
                                    </Form.Item>
                                    <Form.Item className="form-item-custom" label="Ngày thêm mới">
                                        <span className="ant-form-text">24/02/2022</span>
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col xs={24} xl={12}>
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
                    <FormNguoiCapNhat />
                </Col>
                <Col span={24}>
                    <Card title="Thông tin SES">
                        <Row>
                            <Col xs={23} xl={11}>
                                <Form {...formItemLayout}>
                                    <Form.Item label="Tên shop:">
                                        {editform ? (
                                            <Input name="ShopName" value={shopInfomation.shopName} />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopName}</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Link">
                                        {editform ? (
                                            <Form.List name="ShopLink">
                                                {(fields, { add, remove }) => (
                                                    <>
                                                        {fields.map(({ key, name, ...restField }) => (
                                                            <Space
                                                                key={key}
                                                                style={{
                                                                    display: 'flex',
                                                                    marginBottom: 8,
                                                                }}
                                                                align="baseline"
                                                            >
                                                                <Select defaultValue="1">
                                                                    <Option value="1">Website</Option>
                                                                    <Option value="2">Facebook</Option>
                                                                    <Option value="3">Instagram</Option>
                                                                    <Option value="4">Tiktok</Option>
                                                                    <Option value="5">Foody</Option>
                                                                </Select>
                                                                <Form.Item
                                                                    {...restField}
                                                                    name={[name, 'last']}
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Nhập thông tin',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input placeholder="Đường dẫn link" />
                                                                </Form.Item>
                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                            </Space>
                                                        ))}
                                                        <Form.Item>
                                                            <Button
                                                                type="dashed"
                                                                onClick={() => add()}
                                                                block
                                                                icon={<PlusOutlined />}
                                                            >
                                                                Thêm mới
                                                            </Button>
                                                        </Form.Item>
                                                    </>
                                                )}
                                            </Form.List>
                                        ) : (
                                            <span className="ant-form-text">Website: www.google.com</span>
                                        )}
                                    </Form.Item>
                                </Form>
                                <Row gutter={[12, 12]}>
                                    <Col xs={12} xl={12}>
                                        <Form {...formShopTimeOpenLayout}>
                                            <Form.Item label="Giờ mở cửa:" labelAlign="left">
                                                {editform ? (
                                                    <TimePicker
                                                        defaultValue={dayjs('12:08', 'HH:mm')}
                                                        okButtonProps={{ disabled: true }}
                                                        format={'HH:mm'}
                                                    />
                                                ) : (
                                                    <span className="ant-form-text">{shopInfomation.shopOpentime}</span>
                                                )}
                                            </Form.Item>
                                        </Form>
                                    </Col>
                                    <Col xs={1} xl={1} />
                                    <Col xs={11} xl={11}>
                                        <Form {...formShopTimeOpenLayout}>
                                            <Form.Item label="Giờ đóng cửa:">
                                                {editform ? (
                                                    <TimePicker
                                                        defaultValue={dayjs('12:08', 'HH:mm')}
                                                        format={'HH:mm'}
                                                    />
                                                ) : (
                                                    <span className="ant-form-text">
                                                        {shopInfomation.shopClosetime}
                                                    </span>
                                                )}
                                            </Form.Item>
                                        </Form>
                                    </Col>
                                </Row>
                                <Form {...formItemLayout}>
                                    <Form.Item label="Thương hiệu:">
                                        {editform ? (
                                            <Select defaultValue="1" showSearch>
                                                <Option value="1">Ẩm thực</Option>
                                                <Option value="2">Du lịch</Option>
                                                <Option value="3">Thời trang</Option>
                                            </Select>
                                        ) : (
                                            <span className="ant-form-text">Ẩm thực</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Số điện thoại:">
                                        {editform ? (
                                            <Input name="ShopName" value={shopInfomation.shopPhoneNumber} />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopPhoneNumber}</span>
                                        )}
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col xs={1} xl={1} />
                            <Col xs={23} xl={12}>
                                <Form {...formItemLayout}>
                                    <Form.Item label="Tỉnh/ Thành phố:">
                                        {editform ? (
                                            <Select defaultValue="1" showSearch>
                                                <Option value="1">Hà Nội</Option>
                                                <Option value="2">Hải Phòng</Option>
                                            </Select>
                                        ) : (
                                            <span className="ant-form-text">Hà Nội</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Quận/ Huyện:">
                                        {editform ? (
                                            <Select defaultValue="1" showSearch>
                                                <Option value="1">Hoàng Mai</Option>
                                                <Option value="2">Láng Hạ</Option>
                                            </Select>
                                        ) : (
                                            <span className="ant-form-text">Hoàng Mai</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Địa chỉ rút gọn:">
                                        {editform ? (
                                            <Input value={shopInfomation.shopShortAddress} />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopShortAddress}</span>
                                        )}
                                    </Form.Item>
									<Form.Item label="Địa chỉ chi tiết">
                                        {editform ? (
                                            <TextArea
                                                name="shopAddress"
                                                value={shopInfomation.shopAddress}
                                                rows={1}
                                                autoSize
                                            />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopAddress}</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Long:">
                                        {editform ? (
                                            <Input name="ShopName" value={shopInfomation.shopLong} />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopLong}</span>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Lat:">
                                        {editform ? (
                                            <Input name="ShopName" value={shopInfomation.shopLat} />
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopLat}</span>
                                        )}
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={24}>
                                <Form layout="vertical">
                                    <Form.Item label="Giới thiệu:">
                                        {editform ? (
                                            <TextArea
                                                name="introduction"
                                                defaultValue={shopInfomation.shopDescriptions}
                                            ></TextArea>
                                        ) : (
                                            <span className="ant-form-text">{shopInfomation.shopDescriptions}</span>
                                        )}
                                    </Form.Item>
                                </Form>
                            </Col>
                            <Col span={24}>
                                <Row gutter={[24, 24]}>
                                    <Col span={24} xl={8}>
                                        <Card className="card-center">
                                            <Form layout="vertical">
                                                <Form.Item label="Logo thương hiệu" name="upload1">
                                                    {editform ? (
                                                        <ImgCrop rotate>
                                                            <Upload
                                                                name="upload1"
                                                                fileList={fileLogo}
                                                                listType="picture-card"
                                                                onChange={HandleUpdateLogo}
                                                                onPreview={onPreview}
                                                                maxCount={1}
                                                                beforeUpload={(file) => {
                                                                    setFileLogo([...fileLogo, file]);
                                                                    return false;
                                                                }}
                                                            >
                                                                + Tải lên
                                                            </Upload>
                                                        </ImgCrop>
                                                    ) : (
                                                        <Image
                                                            height={150}
                                                            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Form>
                                        </Card>
                                    </Col>
                                    <Col span={24} xl={8}>
                                        <Card className="card-center">
                                            <Form layout="vertical">
                                                <Form.Item label="Ảnh chụp ngoài cửa hàng + Logo" name="upload2">
                                                    {editform ? (
                                                        <ImgCrop rotate>
                                                            <Upload
                                                                name="upload2"
                                                                fileList={fileList}
                                                                listType="picture-card"
                                                                onChange={onChange}
                                                                onPreview={onPreview}
                                                                maxCount={1}
                                                                beforeUpload={(file) => {
                                                                    setFileList([...fileList, file]);
                                                                    return false;
                                                                }}
                                                            >
                                                                + Tải lên
                                                            </Upload>
                                                        </ImgCrop>
                                                    ) : (
                                                        <Image
                                                            height={150}
                                                            src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Form>
                                        </Card>
                                    </Col>
                                    <Col span={24} xl={8}>
                                        <Card className="card-center">
                                            <Form layout="vertical">
                                                <Form.Item label="Ảnh chụp ngoài cửa hàng + Logo" name="upload3">
                                                    {editform ? (
                                                        <ImgCrop rotate>
                                                            <Upload
                                                                name="upload3"
                                                                fileList={fileList}
                                                                listType="picture-card"
                                                                onChange={onChange}
                                                                onPreview={onPreview}
                                                                maxCount={1}
                                                                beforeUpload={(file) => {
                                                                    setFileList([...fileList, file]);
                                                                    return false;
                                                                }}
                                                            >
                                                                + Tải lên
                                                            </Upload>
                                                        </ImgCrop>
                                                    ) : (
                                                        <Image
                                                            height={150}
                                                            src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                                                        />
                                                    )}
                                                </Form.Item>
                                            </Form>
                                        </Card>
                                    </Col>
                                    <Col span={24}>
                                        <Card size="small" title="Hình ảnh gợi ý">
                                            <div className="image-group-preview">
                                                <Image.PreviewGroup
                                                    preview={{
                                                        visible,
                                                        onVisibleChange: (vis) => setVisible(vis),
                                                    }}
                                                >
                                                    <Image
                                                        height={100}
                                                        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                                    />
                                                    <Image
                                                        height={100}
                                                        src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
                                                    />
                                                    <Image
                                                        height={100}
                                                        src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
                                                    />
                                                </Image.PreviewGroup>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>

                            <Divider />

                            <Space direction="horizontal" style={{ width: '100%', justifyContent: 'end' }}>
                                {editform ? (
                                    <>
                                        <Button htmlType="submit" onClick={toggleEditForm}>
                                            Huỷ
                                        </Button>
                                        <Button type="primary" htmlType="submit" onClick={toggleEditForm}>
                                            Cập nhật
                                        </Button>
                                    </>
                                ) : (
                                    <Button type="primary" htmlType="submit" onClick={toggleEditForm}>
                                        Chỉnh sửa
                                    </Button>
                                )}
                            </Space>
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
                        <Button icon={<HistoryOutlined />} type="primary" size="large">
                            Cho vào danh sách Pending
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handlePreviewCancel} maskClosable>
                <img
                    alt="example"
                    style={{
                        width: '100%',
                    }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};

export default ChiTietShopMoi;
