import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Space, Table, Select, Tooltip, Modal, message, Tag, Image, Typography, DatePicker, Divider } from 'antd';
import { FileExcelOutlined } from '@ant-design/icons';
import { } from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
import { MySelectAll } from '~/layouts/components/Forms/Select';
const BaoCaoHieuSuat = () => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT',
      width: 50
    },
    {
      title: 'Thời gian từ - đến',
      dataIndex: 'Thời gian từ - đến',
      key: 'Thời gian từ - đến'
    },
    {
      title: 'Tài khoản',
      dataIndex: 'Tài khoản',
      key: 'Tài khoản'
    },
    {
      title: 'Số shop được giao',
      dataIndex: 'Số shop được giao',
      key: 'Số shop được giao'
    },
    {
      title: 'Số shop được duyệt',
      dataIndex: 'Số shop được duyệt',
      key: 'Số shop được duyệt'
    },
    {
      title: 'Số lượt gửi yêu cầu duyệt',
      dataIndex: 'Số lượt gửi yêu cầu duyệt',
      key: 'Số lượt gửi yêu cầu duyệt'
    },
    {
      title: 'Số shop chờ cập nhật',
      dataIndex: 'Số shop chờ cập nhật',
      key: 'Số shop chờ cập nhật'
    },
    {
      title: 'Số shop chờ duyệt',
      dataIndex: 'Số shop chờ duyệt',
      key: 'Số shop chờ duyệt'
    },
    {
      title: 'Số lượt từ chối',
      dataIndex: 'Số lượt từ chối',
      key: 'Số lượt từ chối'
    },
    {
      title: 'Số lượt pending',
      dataIndex: 'Số lượt pending',
      key: 'Số lượt pending'
    },
  ];

  const data = [
    {
      key: '1',
      'Thời gian từ - đến': '20/11/2022 - 21/11/2022',
      'Tài khoản': 'Thaiph',
      'Số shop được giao': '100',
      'Số shop được duyệt': '400',
      'Số lượt gửi yêu cầu duyệt': '100',
      'Số shop chờ cập nhật': '100',
      'Số shop chờ duyệt': '',
      'Số lượt từ chối': '',
      'Số lượt pending': '',
    },
  ];

  const dataForm = [
    {
      formItemProp: {
        label: 'Từ ngày',
      },
      form: <DatePicker />
    },
    {
      formItemProp: {
        label: 'Đến ngày',
      },
      form: <DatePicker />
    },
    {
      formItemProp: {
        label: 'Tài khoản',
      },
      form: <MySelectAll
        options={[
          {
            value: 'thaiph',
            label: 'thaiph',
          },
          {
            value: 'quanlt',
            label: 'quanlt',
          },
          {
            value: 'linhtp',
            label: 'linhtp',
          },
        ]}
      />
    }
  ]


  return (
    <>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <AdvancedSearchForm dataForm={dataForm} />
        </Col>
        <Col span={24}>
          <Button type="primary" className='ubg-green' style={{ marginBottom: 16 }} icon={<FileExcelOutlined />}>
            Xuất Excel
          </Button>
          <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }}
          />
        </Col>
      </Row>
    </>
  );
};

export default BaoCaoHieuSuat;
