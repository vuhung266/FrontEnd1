import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Row, Col, Space, Table, Select, Tooltip, Modal, message, Tag, Image, Typography, Upload, Switch } from 'antd';
import { EditOutlined, SearchOutlined, DeleteOutlined, CheckCircleFilled, CloseCircleFilled, PlusCircleOutlined, LockOutlined, UnlockOutlined, EyeOutlined } from '@ant-design/icons';
import { } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
const { Option } = Select;
const { TextArea } = Input;

const { confirm } = Modal;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const LyDoPending = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BigCLogo2022.svg/1200px-BigCLogo2022.svg.png',
    },
  ]);


  const showDetailModal = () => {
    setIsModalDetailOpen(true);
  };

  const handleModalDetailOk = () => {
    setIsModalDetailOpen(false);
  };

  const handleModalDetailCancel = () => {
    setIsModalDetailOpen(false);
  };

  const showAddModal = () => {
    setIsModalAddOpen(true);
  };

  const handleModalAddOk = () => {
    setIsModalAddOpen(false);
  };

  const handleModalAddCancel = () => {
    setIsModalAddOpen(false);
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
      title: 'Mã danh mục',
      dataIndex: 'code',
      key: 'code',
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: 'Tên danh mục SES (VN)',
      dataIndex: 'nameVN',
      key: 'nameVN',
    },
    {
      title: 'Tên danh mục SES (ENG)',
      dataIndex: 'nameEng',
      key: 'nameEng',
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
            <Tooltip title="Chi tiết">
              <Button shape="circle" icon={<EyeOutlined />} onClick={showDetailModal} />
            </Tooltip>
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
      code: 'DM-001',
      nameVN: 'Ẩm thực',
      nameEng: '',
      isactive: 'hoatdong',
    },
    {
      key: '2',
      STT: '2',
      code: 'DM-002',
      nameVN: 'Giải trí',
      nameEng: '',
      isactive: 'khoa',
    }
  ];

  const dataForm = [
    {
      formItemProp: {
        label: 'Tên danh mục (VN)',
      },
      form: <Input placeholder="Nhập" />
    },
    {
      formItemProp: {
        label: 'Tên danh mục (ENG)',
      },
      form: <Input placeholder="Nhập" />
    },
    {
      formItemProp: {
        label: 'Mã danh mục',
      },
      form: <Input placeholder="Nhập" />
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
          <Button type="primary" style={{ marginBottom: 16 }} icon={<PlusCircleOutlined />} onClick={showAddModal}>
            Thêm mới
          </Button>
          <Table columns={columns} dataSource={data} pagination={{ position: 'bottomRight' }}
          />
        </Col>
      </Row>
      <Modal open={isModalDetailOpen} maskClosable={true} onOk={handleModalDetailOk} onCancel={handleModalDetailCancel} okText='Lưu lại' title='Chi tiết thương hiệu'
        footer={
          (
            <>
              <Space wrap>
                <Button type='default'>
                  Đóng
                </Button>
              </Space>
            </>
          )
        }
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign='left'
        >
          <Form.Item
            label="Mã thương hiệu"
          >
            <Typography.Text className="ant-form-text" type="primary">
              BIGC
            </Typography.Text>
          </Form.Item>
          <Form.Item
            label="Tên thương hiệu (VI)"
          >
            <Typography.Text className="ant-form-text" type="primary">
              Siêu thị BigC
            </Typography.Text>
          </Form.Item>
          <Form.Item
            label="Tên thương hiệu (EN)"
          >
            <Typography.Text className="ant-form-text" type="primary">
              BigC Supercenter
            </Typography.Text>
          </Form.Item>
          <Form.Item
            label="Ảnh logo"
          >
            <Image
              width={100}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BigCLogo2022.svg/1200px-BigCLogo2022.svg.png"
            />
          </Form.Item>
          <Form.Item
            label="Trạng thái"
          >
            <Tag color="green">Hiển thị</Tag>
          </Form.Item>
        </Form>
      </Modal>
      <Modal open={isModalAddOpen} maskClosable={true} onOk={handleModalAddOk} onCancel={handleModalAddCancel} okText='Lưu lại' title='Thêm mới'
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          labelAlign='left'
        >
          <Form.Item
            required
            label="Tên danh mục  (VI)"
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            required
            label="Tên danh mục (EN)"
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Trạng thái"
          >
            <Space wrap align='end'>
              <Switch />
              <Tag color="green">Hiển thị</Tag>
            </Space>

          </Form.Item>
          <Form.Item
            label="Ảnh logo"
            name='upload1'
          >
            <ImgCrop rotate>
              <Upload
                name='upload1'

                listType="picture-card"
                onChange={onChange}
                onPreview={onPreview}
                maxCount={1}
                beforeUpload={((file) => {
                  setFileList([...fileList, file]);
                  return false;
                })}
              >
                + Tải lên
              </Upload>
            </ImgCrop>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LyDoPending;
