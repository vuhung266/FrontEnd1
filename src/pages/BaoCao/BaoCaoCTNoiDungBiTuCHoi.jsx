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
      title: 'Lý do từ chối',
      dataIndex: 'Lý do từ chối',
      key: 'Lý do từ chối'
    },
    {
      title: 'Số lượng shop bị từ chối',
      dataIndex: 'Số lượng shop bị từ chối',
      key: 'Số lượng shop bị từ chối'
    }
  ];

  const data = [
    {
      key: '1',
      'Thời gian từ - đến': '20/11/2022 - 21/11/2022',
      'Tài khoản': 'Thaiph',
      'Lý do từ chối': 'Cửa hàng chưa có đầy đủ thông tin bắt buộc',
      'Số lượng shop bị từ chối': '100',
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
