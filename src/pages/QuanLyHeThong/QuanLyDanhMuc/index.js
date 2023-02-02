import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Space, Table, Tooltip, Select, Modal, message, Form } from 'antd';
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import ShowConfirmResetPass from './ResetPass';
import ShowConfirmLockUser from './LockUser';
import { useQuery, useMutation } from 'react-query';
import * as menuServices from '~/services/menuService';
import axios from 'axios';
const QuanLyDanhMuc = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [sendRequest, setSendRequest] = useState(false);
    const [dataMenu, setDataMenu] = useState([]);
    const [initialValues, setInitialValues] = useState([]);
    useEffect(() => {
        if (sendRequest) {
            setSendRequest(false);
        }
        const fetchApi = async () => {
            const result = await menuServices.getMenu();
            const resultArray = result.map((elm) => ({
                key: elm.id,
                value: elm.id,
                label: elm.name,
                name: elm.name,
                pid: elm.pid,
                order: elm.order,
            }));
            setDataMenu(resultArray);
        };
        fetchApi();
    }, [sendRequest]);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const onFinish = (values) => {
        createPost(values); //reload data
        setSendRequest(true);
        setIsModalOpen(false);
        setIsModalOpen(false);
		sendEditData(values)
		console.log('Received values of form: ', values);
    };
	const sendEditData = async (e) => {
        const result = await menuServices.editMenu(e); console.log(result)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
	useEffect(() => {
		form.setFieldsValue(initialValues)
	   }, [form, initialValues])
    const openEditModal = (e) => {
       
		setInitialValues(e);  console.log(initialValues);
		setIsModalOpen(true);
		setSendRequest(true);
    };
    const columns = [
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Thư mục cha',
            dataIndex: 'pid',
            key: 'pid',
        },
        {
            title: 'Thứ tự',
            dataIndex: 'order',
            key: 'order',
        },
        {
            title: `Action`,
            render: (e) => (
                <Space direction="vertical">
                    <Space wrap>
                        <Tooltip title="Sửa Danh mục">
                            <Button shape="circle" icon={<EditOutlined />} onClick={() => openEditModal(e)} />
                        </Tooltip>
                        <ShowConfirmLockUser data={e} />
                        <ShowConfirmResetPass type="icononly" data={e} />
                    </Space>
                </Space>
            ),
        },
    ];

    // const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('http://localhost:4000/menus').then((res) => res.json()),
    // );
    // const updatedData = data?.map((itemdata) => ({ ...itemdata, key: itemdata.id })) | [];

    // const dataPid = data?.map(({ id, name }) => ({
    // 	value: id,
    // 	label: name,
    // }));

    const onCreate = (values) => onFinish(values);
    async function createPost(data) {
        const response = await axios.post('http://localhost:4000/menus', data);
        console.log(response.data);
    }

    return (
        <>
            {contextHolder}
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
                                Thêm mới danh mục
                            </Button>
                        </Col>
                        <Col span={24}>
                            <Table columns={columns} dataSource={dataMenu} pagination={{ position: 'bottomRight' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal
				forceRender 
                open={isModalOpen}
                maskClosable={true}
                onOk={() => {
                    form.validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
                onCancel={handleCancel}
                okText="Lưu lại"
                title="Thêm mới lý do từ chối duyệt"
            >
                <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
                    <Col span={24}>
                        <Form
                            form={form}
                            layout="vertical"
                            name="form_in_modal"
                            initialValues={initialValues}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            labelAlign="left"
                        >
                            <Form.Item label="Tên danh mục" name="name" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Thứ tự" name="order" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Thư mục cha" name="pid" required={true}>
                                <Select showSearch allowClear options={dataMenu} />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default QuanLyDanhMuc;
