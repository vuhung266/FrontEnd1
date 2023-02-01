import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Space, Table, Select, Tooltip, Modal, message, Tag, Alert } from 'antd';
import { EditOutlined, SearchOutlined, DeleteOutlined, CheckCircleFilled, CloseCircleFilled, PlusCircleOutlined, LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { } from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
const { Option } = Select;
const { TextArea } = Input;

const { confirm } = Modal;
const LyDoTuChoiDuyet = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    messageApi.open({
      type: 'success',
      content: 'Thêm mới thành công',
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
      width: 50
    },
    {
      title: 'Lí do',
      dataIndex: 'name',
      key: 'name',
      editable: true,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Trạng thái',
      key: 'isactive',
      render: (e) => {
        if (e.isactive === 'hoatdong') {
          return <Tag color="green">Hiển thị</Tag>;
        }
        if (e.isactive === 'khoa') {
          return <Tag color="red">Khóa</Tag>;
        }
      },
    },
    {
      title: 'Thao tác',
      key: 'action',
      fixed: 'right',
      width: 200,
      render: (e) => (
        <Space direction="vertical">
          <Space wrap>
            {e.isactive === 'hoatdong' && (
              <Tooltip title="Khóa">
                <Button shape="circle" icon={<LockOutlined />} onClick={() => showConfirmKhoa()} />
              </Tooltip>
            )}
            {e.isactive === 'khoa' && (
              <Tooltip title="Mở khóa">
                <Button shape="circle" icon={<UnlockOutlined />} onClick={() => showConfirmMoKhoa()} />
              </Tooltip>
            )}
          </Space>
        </Space>
      ),
    }
  ];

  const data = [
    {
      key: '1',
      STT: '1',
      name: 'Cửa hàng chưa có đầy đủ thông tin bắt buộc',
      isactive: 'hoatdong',
    },
    {
      key: '2',
      STT: '2',
      name: 'Thông tin cửa hàng trùng khớp',
      isactive: 'khoa',
    }
  ];

  const dataForm = [
    {
      formItemProp: {
        name: 'ly-do',
        label: 'Lý do',
      },
      form: <Input placeholder="Nhập" />
    },
    {
      formItemProp: {
        name: 'ly-do-2',
        label: 'Trạng thái',
      },
      form: <Select
        options={[
          {
            value: 'Tất cả',
            label: 'Tất cả',
          },
          {
            value: 'Option 2',
            label: 'Option 2',
          },
        ]}
      />
    }
  ]


  return (
    <>
      {contextHolder}
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <AdvancedSearchForm dataForm={dataForm} />

        </Col>
        <Col span={24}>
          <Button type="primary" style={{ marginBottom: 16 }} icon={<PlusCircleOutlined />} onClick={showModal}>
            Thêm mới
          </Button>
          <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }}
          />
        </Col>
      </Row>
      <Modal open={isModalOpen} maskClosable={true} onOk={handleOk} onCancel={handleCancel} okText='Lưu lại' title='Thêm mới lý do từ chối duyệt'>
        <Row gutter={[16,16]}>
          <Col span={24}>
            <Alert
              message="Lưu ý: Không thể chỉnh sau khi thêm mới."
              type="warning"
            />
          </Col>
          <Col span={24}>
            <Form
              layout="vertical"
            >
              <Form.Item
                label="Lý do"
                name="reason"
              >
                <TextArea />
              </Form.Item>
            </Form>
          </Col>
        </Row>
        
      </Modal>
    </>
  );
};

export default LyDoTuChoiDuyet;
