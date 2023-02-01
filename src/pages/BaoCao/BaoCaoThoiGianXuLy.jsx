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
      title: 'Số shop chờ duyệt',
      dataIndex: 'Số shop chờ duyệt',
      key: 'Số shop chờ duyệt'
    },
    {
      title: 'Tổng thời gian',
      dataIndex: 'Tổng thời gian',
      key: 'Tổng thời gian'
    },
    {
      title: 'Số lượt gửi yêu cầu duyệt',
      dataIndex: 'Số lượt gửi yêu cầu duyệt',
      key: 'Số lượt gửi yêu cầu duyệt'
    },
    {
      title: 'Tổng số shop chờ cập nhật quá hạn',
      dataIndex: 'Tổng số shop chờ cập nhật quá hạn',
      key: 'Tổng số shop chờ cập nhật quá hạn'
    },
    {
      title: 'Tổng số shop pending quá hạn',
      dataIndex: 'Tổng số shop pending quá hạn',
      key: 'Tổng số shop pending quá hạn'
    },
  ];

  const data = [
    {
      key: '1',
      'Thời gian từ - đến': '20/11/2022 - 21/11/2022',
      'Tài khoản': 'Thaiph',
      'Số shop chờ duyệt': '100',
      'Tổng thời gian': '400',
      'Số lượt gửi yêu cầu duyệt': '100',
      'Tổng số shop chờ cập nhật quá hạn': '100',
      'Tổng số shop pending quá hạn': '',
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
