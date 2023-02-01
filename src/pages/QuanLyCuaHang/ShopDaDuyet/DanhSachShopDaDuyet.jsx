import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Tag, Input, Row, Col, DatePicker, Table, Select, Tooltip, Modal, message, Space } from 'antd';
import { FileExcelOutlined, EyeOutlined } from '@ant-design/icons';
import {} from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
import ShowConfirmLockUser from './LockShop';
import ShowConfirmUnLockUser from './UnLockShop';
const { confirm } = Modal;

const data = [
    {
        key: '1',
        STT: '1',
        MerchantID: 'MID-001',
        ShopID: 'ID-001',
        ShopName: 'Bé Bống',
        ShopAddress: '22 Láng Hạ',
        ngayduyet: '21/12/2022',
        isactive: 'hoatdong',
        UserUpdate: 'NguyenVanA',
        UserDuyet: 'AdminSys',
    },
    {
        key: '2',
        STT: '2',
        MerchantID: 'MID-002',
        ShopID: 'ID-002',
        ShopName: 'Xuân Mai',
        ShopAddress: '22 Láng Hạ',
        ngayduyet: '21/12/2022',
        isactive: 'hoatdong',
        UserUpdate: 'TranB',
        UserDuyet: 'AdminSys',
    },
    {
        key: '3',
        STT: '3',
        MerchantID: 'MID-003',
        ShopID: 'ID-003',
        ShopName: 'Hà Huy',
        ShopAddress: '22 Láng Hạ',
        ngayduyet: '21/12/2022',
        isactive: 'khoa',
        UserUpdate: 'LinhTT',
        UserDuyet: 'AdminSys',
    },
    {
        key: '4',
        STT: '4',
        MerchantID: 'MID-004',
        ShopID: 'ID-004',
        ShopName: 'MidWorld',
        ShopAddress: '22 Láng Hạ',
        ngayduyet: '21/12/2022',
        isactive: 'khoa',
        UserUpdate: 'LeVanB',
        UserDuyet: 'AdminSys',
    },
    {
        key: '5',
        STT: '5',
        MerchantID: 'MID-005',
        ShopID: 'ID-005',
        ShopName: 'Xuân An',
        ShopAddress: '22 Láng Hạ',
        ngayduyet: '21/12/2022',
        isactive: 'hoatdong',
        UserUpdate: 'NguyenVanA',
        UserDuyet: 'AdminSys',
    },
];

const DanhSachShopDaDuyet = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [dataShops, setDatashops] = useState(data);
    const [draft, setDraft] = useState([]);
    const columns = [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
            width: 50,
        },
        {
            title: 'Merchant ID',
            dataIndex: 'MerchantID',
            key: 'MerchantID',
        },
        {
            title: 'Shop ID',
            dataIndex: 'ShopID',
            key: 'ShopID',
        },
        {
            title: 'Tên shop',
            dataIndex: 'ShopName',
            key: 'ShopName',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'ShopAddress',
            key: 'ShopAddress',
        },
        {
            title: 'Ngày duyệt',
            dataIndex: 'ngayduyet',
            key: 'ngayduyet',
        },
        {
            title: 'Trạng thái',
            key: 'isactive',
            render: (e) => {
                if (e.isactive === 'hoatdong') {
                    return <Tag color="green">Hoạt động</Tag>;
                }
                if (e.isactive === 'khoa') {
                    return <Tag color="default">Ẩn</Tag>;
                }
            },
        },
        {
            title: 'Người cập nhật',
            dataIndex: 'UserUpdate',
            key: 'UserUpdate',
        },
        {
            title: 'Người duyệt',
            dataIndex: 'UserDuyet',
            key: 'UserDuyet',
        },
        {
            title: 'Thao tác',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (e) => (
                <>
                    <Space>
                        <Tooltip title="Xem chi tiết">
                            <Button
                                shape="circle"
                                icon={<EyeOutlined />}
                                onClick={() => {
                                    navigate(`/quan-ly-cua-hang/danh-sach-shop-da-duyet/chi-tiet/${e.ShopID}`);
                                }}
                            />
                        </Tooltip>
                        {e.isactive === 'hoatdong' && <ShowConfirmLockUser data={e} khoauser={LockShop} />}
                        {e.isactive === 'khoa' && <ShowConfirmUnLockUser data={e} khoauser={UnLockShop} />}
                    </Space>
                </>
            ),
        },
    ];
    const dataForm = [
        {
            formItemProp: {
                name: 'FromDate',
                label: 'Từ ngày',
            },
            form: <DatePicker />,
        },
        {
            formItemProp: {
                name: 'ToDate',
                label: 'Đến ngày',
            },
            form: <DatePicker />,
        },
        {
            formItemProp: {
                name: 'shopId',
                label: 'Mã shop',
            },
            form: <Input placeholder="Nhập" />,
        },
        {
            formItemProp: {
                name: 'UserUpdated',
                label: 'Người duyệt',
            },
            form: (
                <Select
                    options={[
                        {
                            value: 'Tất cả',
                            label: 'Tất cả',
                        },
                        {
                            value: 'Uid1',
                            label: 'Nguyễn Văn A',
                        },
                        {
                            value: 'Uid2',
                            label: 'Trần Văn B',
                        },
                    ]}
                />
            ),
        },
        {
            formItemProp: {
                name: 'shopName',
                label: 'Tên shop',
            },
            form: <Input placeholder="Nhập" />,
        },
        {
            formItemProp: {
                name: 'status',
                label: 'Trạng thái',
            },
            form: (
                <Select
                    options={[
                        {
                            value: 'Tất cả',
                            label: 'Tất cả',
                        },
                        {
                            value: 'Uid1',
                            label: 'Hoạt động',
                        },
                        {
                            value: 'Uid2',
                            label: 'Ẩn',
                        },
                    ]}
                />
            ),
        },
        {
            formItemProp: {
                name: 'MerchantId',
                label: 'MerchantId',
            },
            form: <Input placeholder="Nhập" />,
        },
    ];
    const LockShop = (e) => {
        let objIndex = dataShops.findIndex((obj) => obj.ShopName === e);
        dataShops[objIndex].isactive = 'khoa';
        setDraft({ isactive: 'khoa', key: objIndex });
    };
    const UnLockShop = (e) => {
        let objIndex = dataShops.findIndex((obj) => obj.ShopName === e);
        dataShops[objIndex].isactive = 'hoatdong';
        setDraft({ isactive: 'hoatdong', key: objIndex });
    };
    useEffect(() => {}, [draft]);
    return (
        <>
            {contextHolder}
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <AdvancedSearchForm dataForm={dataForm} />
                </Col>
                <Col span={24}>
                    <Button type="primary" style={{ marginBottom: 16 }} icon={<FileExcelOutlined />}>
                        Xuất Excel
                    </Button>
                    <Table columns={columns} dataSource={dataShops} pagination={{ position: 'bottomRight' }} />
                </Col>
            </Row>
        </>
    );
};

export default DanhSachShopDaDuyet;
