import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Row, Col, Select, Modal, message, Form } from 'antd';
import * as menuServices from '~/services/menuService';
import axios from 'axios';
import TreeMenu from './TreeMenu';
const QuanLyDanhMuc = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const [isAddNew, setIsAddNew] = useState(false);
    const [sendRequest, setSendRequest] = useState(false);
    const [dataMenu, setDataMenu] = useState([]);
    const [dataPids, setDataPids] = useState([]);
    const [initialValues, setInitialValues] = useState([]);
    // const [services, setServices] = useState([]);

    const [items, setItems] = useState([]);

    useEffect(() => {
        if (sendRequest) {
            setSendRequest(false);
        }
        const fetchApi = async () => {
            const result = await menuServices.getMenu();
            // setServices(result);
            const resultArray = result.map((elm) => ({
                id: elm.id,
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

    function convertToNestedArray(data) {
        const result = [];
        const map = {};

        data.forEach((item) => {
            map[item.id] = item;
            item.children = [];
        });

        data.forEach((item) => {
            const parent = map[item.pid];
            if (parent) {
                parent.children.push(item);
            } else {
                result.push(item);
            }
        });

        return result;
    }

    const nestedData = convertToNestedArray(dataMenu); //console.log(nestedData)

    // function createTreeMenu(nestedData) {
    //     const ul = document.createElement('ul');
    //     nestedData.forEach((item) => {
    //         const li = document.createElement('li');
    //         li.textContent = item.name;
    //         if (item.children.length > 0) {
    //             li.appendChild(createTreeMenu(item.children));
    //         }
    //         ul.appendChild(li);
    //     });
    //     return ul;
    // }
    // const treeMenu = createTreeMenu(nestedData);

    // console.log(treeMenu);

    const onCreate = (values) => {
        if (isAddNew) {
            createPost(values);
            setIsAddNew(false);
        } else {
            sendEditData(values);
        }
        setSendRequest(true);
        setIsModalOpen(false);
    };

    const sendEditData = async (e) => {
        const result = await menuServices.editMenu(e, initialValues.key);
        console.log(result);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [form, initialValues]);
    const openEditModal = (e) => {
        setIsAddNew(false);
        setInitialValues(e);
        setIsModalOpen(true);
        setSendRequest(true);
        const filteredArray = dataMenu.filter((obj) => obj.key !== e.key); // b??? item c?? id c???n s???a kh???i drop Pid
        filteredArray.unshift({ key: 0, value: 0, label: 'L?? th?? m???c g???c' });
        setDataPids(filteredArray);
        setDataMenu(dataMenu);
    };
    const openAddChildModal = (e) => {
        console.log(e);
        setIsAddNew(true);
        setInitialValues({ key: e.key, label: e.label, name: '', order: '', pid: e.key, value: e.key });
        setIsModalOpen(true);
        setSendRequest(true);
        dataMenu.unshift({ key: 0, value: 0, label: 'L?? th?? m???c g???c' });
        setDataPids(dataMenu);
        setDataMenu(dataMenu);
    };

    // const { isLoading, error, data } = useQuery('repoData', () =>
    //     fetch('http://localhost:4000/menus').then((res) => res.json()),
    // );

    async function createPost(data) {
        const response = await axios.post('http://localhost:4000/menus', data);
        console.log(response.data);
    }
    const confirmDelete = (e) => {
        console.log(e);
        message.info(`X??a th??nh c??ng danh m???c ${e.name}.`);
        deleteMenuItem(e.key);
    };
    async function deleteMenuItem(id) {
        await axios.delete(`http://localhost:4000/menus/${id}`);
        setSendRequest(true);
    }
    const addNewMenu = () => {
        setInitialValues({ key: '', label: '', name: '', order: '', pid: 0, value: '' });
        setIsModalOpen(true);
        setIsAddNew(true);
    };
    function handleClick(data) {
        console.log(data);
        setIsModalOpen(true);
        setInitialValues(data);
    }
    return (
        <>
            {contextHolder}

            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <TreeMenu nestedData={nestedData} onClick={handleClick} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Modal
                forceRender
                width={1000}
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
                okText="L??u l???i"
                title={`${isAddNew ? 'Th??m' : 'S???a'} danh m???c`}
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
                            <Form.Item label="T??n danh m???c" name="name" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Th??? t???" name="order" required={true}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Th?? m???c cha" name="pid" required={true}>
                                <Select showSearch allowClear options={dataPids} />
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Modal>
        </>
    );
};

export default QuanLyDanhMuc;
