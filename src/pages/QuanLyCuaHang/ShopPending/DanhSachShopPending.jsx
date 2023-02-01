import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, DatePicker, Table, Select, Tooltip, Modal } from 'antd';
import { FileExcelOutlined, EyeOutlined } from '@ant-design/icons';
import {} from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
const { confirm } = Modal;
const DanhSachShopPending = () => {
    const navigate = useNavigate();

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
            title: 'Người cập nhật',
            dataIndex: 'UserUpdate',
            key: 'UserUpdate',
        },
        {
            title: 'Lý do từ chối',
            dataIndex: 'ReasonUpdate',
            key: 'ReasonUpdate',
        },
        {
            title: 'Thao tác',
            key: 'action',
            fixed: 'right',
            width: 100,
            render: (e) => (
                <Tooltip title="Xem chi tiết">
                    <Button
                        shape="circle"
                        icon={<EyeOutlined />}
                        onClick={() => {
                            navigate(`/quan-ly-cua-hang/danh-sach-shop-pending/chi-tiet/${e.ShopID}`);
                        }}
                    />
                </Tooltip>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            STT: '1',
            MerchantID: 'MID-001',
            ShopID: 'ID-12121',
            ShopName: 'Bé Bống',
            ShopAddress: '22 Láng Hạ',
            UserUpdate: 'NguyenVanA',
            ReasonUpdate: 'Thiếu hình ảnh',
        },
        {
            key: '2',
            STT: '2',
            MerchantID: 'MID-002',
            ShopID: 'ID-12121',
            ShopName: 'Bé Bống',
            ShopAddress: '22 Láng Hạ',
            UserUpdate: 'TranB',
            ReasonUpdate: 'Thiếu địa chỉ',
        },
        {
            key: '3',
            STT: '3',
            MerchantID: 'MID-003',
            ShopID: 'ID-12121',
            ShopName: 'Bé Bống',
            ShopAddress: '22 Láng Hạ',
            UserUpdate: 'LinhTT',
            ReasonUpdate: 'Thiếu giờ mở cửa',
        },
        {
            key: '4',
            STT: '4',
            MerchantID: 'MID-004',
            ShopID: 'ID-12121',
            ShopName: 'Bé Bống',
            ShopAddress: '22 Láng Hạ',
            UserUpdate: 'LeVanB',
            ReasonUpdate: 'Thiếu hình ảnh',
        },
        {
            key: '5',
            STT: '5',
            MerchantID: 'MID-005',
            ShopID: 'ID-12121',
            ShopName: 'Bé Bống',
            ShopAddress: '22 Láng Hạ',
            UserUpdate: 'NguyenVanA',
            ReasonUpdate: 'Thiếu hình ảnh',
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
                name: 'shopAddress',
                label: 'Địa chỉ',
            },
            form: <Input placeholder="Nhập" />,
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
                name: 'ReasonUpdate',
                label: 'Lý do từ chối',
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
                            label: 'Thiếu hình ảnh',
                        },
                        {
                            value: 'Uid2',
                            label: 'Thiếu địa chỉ',
                        },
                        {
                            value: 'Uid3',
                            label: 'Thiếu giờ mở cửa',
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

    return (
        <>
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <AdvancedSearchForm dataForm={dataForm} />
                </Col>
                <Col span={24}>
                    <Button type="primary" style={{ marginBottom: 16 }} icon={<FileExcelOutlined />}>
                        Xuất Excel
                    </Button>
                    <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }} />
                </Col>
            </Row>
        </>
    );
};

export default DanhSachShopPending;
