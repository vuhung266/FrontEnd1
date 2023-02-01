import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, DatePicker, Table, Select, Tooltip, Modal, message } from 'antd';
import { FileExcelOutlined, LockOutlined, UnlockOutlined, EyeOutlined } from '@ant-design/icons';
import { } from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
const { confirm } = Modal;
const DanhSachShopChoCapNhat = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const showConfirmKhoa = () => {
    confirm({
      title: 'Bạn chắc chắn muốn khóa lý do này ?',
      icon: <LockOutlined />,
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      maskClosable: true,
      onOk () {
        messageApi.open({
          type: 'success',
          content: 'Khoá thành công',
        });
      },
      onCancel () {
        console.log('Cancel');
      },
    });
  };

  const showConfirmMoKhoa = () => {
    confirm({
      title: 'Bạn chắc chắn muốn mở khóa lý do này ?',
      icon: <UnlockOutlined />,
      okText: 'Xác nhận',
      cancelText: 'Hủy',
      maskClosable: true,
      onOk () {
        messageApi.open({
          type: 'success',
          content: 'Mở khoá thành công',
        });
      },
      onCancel () {
        console.log('Cancel');
      },
    });
  };
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
      editable: true,
    },
    {
      title: 'Shop ID',
      dataIndex: 'ShopID',
      key: 'ShopID',
      editable: true,
    },
    {
      title: 'Tên shop',
      dataIndex: 'ShopName',
      key: 'ShopName',
      editable: true,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'ShopAddress',
      key: 'ShopAddress',
      editable: true,
    },
    {
      title: 'Ngày thêm mới',
      dataIndex: 'DateUpdate',
      key: 'DateUpdate',
      editable: true,
    },
    {
      title: 'Người cập nhật',
      dataIndex: 'UserUpdate',
      key: 'UserUpdate',
      editable: true,
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
              navigate(`/quan-ly-cua-hang/danh-sach-shop-cho-cap-nhat/chi-tiet/${e.ShopID}`);
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
      DateUpdate: '21/12/2022',
      UserUpdate: 'NguyenVanA',
    },
    {
      key: '2',
      STT: '2',
      MerchantID: 'MID-002',
      ShopID: 'ID-12121',
      ShopName: 'Bé Bống',
      ShopAddress: '22 Láng Hạ',
      DateUpdate: '21/12/2022',
      UserUpdate: 'TranB',
    },
    {
      key: '3',
      STT: '3',
      MerchantID: 'MID-003',
      ShopID: 'ID-12121',
      ShopName: 'Bé Bống',
      ShopAddress: '22 Láng Hạ',
      DateUpdate: '21/12/2022',
      UserUpdate: 'LinhTT',
    },
    {
      key: '4',
      STT: '4',
      MerchantID: 'MID-004',
      ShopID: 'ID-12121',
      ShopName: 'Bé Bống',
      ShopAddress: '22 Láng Hạ',
      DateUpdate: '21/12/2022',
      UserUpdate: 'LeVanB',
    },
    {
      key: '5',
      STT: '5',
      MerchantID: 'MID-005',
      ShopID: 'ID-12121',
      ShopName: 'Bé Bống',
      ShopAddress: '22 Láng Hạ',
      DateUpdate: '21/12/2022',
      UserUpdate: 'NguyenVanA',
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
        name: 'UserUpdated',
        label: 'Người cập nhật',
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
        name: 'MerchantId',
        label: 'MerchantId',
      },
      form: <Input placeholder="Nhập" />,
    },
  ];

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
          <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }} />
        </Col>
      </Row>
    </>
  );
};

export default DanhSachShopChoCapNhat;
