import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Space, Table, Tag, Tooltip, Modal, message, Select } from 'antd';
import {
    ExclamationCircleFilled,
    EyeOutlined,
    LockOutlined,
    UnlockOutlined,
    PlusCircleOutlined,
} from '@ant-design/icons';
import AdvancedSearchForm from '~/components/Form/AdvancedSearchForm';
import { useSelector } from 'react-redux';

const QuanLyNhomQuyen = () => {
    const navigate = useNavigate();
	const dataNhomQuyen = useSelector((state) => state.nhomquyen);
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal;
    const showConfirmLock = () => {
        confirm({
            title: 'Bạn chắc chắn muốn khóa nhóm quyền này ?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                messageApi.info('Khóa nhóm quyền thành công!');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const showConfirmUnlock = () => {
        confirm({
            title: 'Bạn chắc chắn muốn mở khóa nhóm quyền này ?',
            icon: <ExclamationCircleFilled />,
            okText: 'Xác nhận',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                messageApi.info('Mở khóa nhóm quyền thành công!');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const columns = [
        {
            title: 'Tên nhóm quyền',
            dataIndex: 'tenhomquyen',
            key: 'tenhomquyen',
        },
        {
            title: 'Mô tả',
            dataIndex: 'mota',
            key: 'mota',
        },
        {
            title: 'Trạng thái',
            key: 'isactive',
            render: (e) => {
                if (e.isactive === 'hoatdong') {
                    return <Tag color="green">Hoạt động</Tag>;
                }
                if (e.isactive === 'khoa') {
                    return <Tag color="red">Khóa</Tag>;
                }
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (e) => (
                <Space direction="vertical">
                    <Space wrap>
                        <Tooltip title="Xem chi tiết">
                            <Button shape="circle" icon={<EyeOutlined />} />
                        </Tooltip>
                        {e.isactive === 'hoatdong' && (
                            <Tooltip title="Khóa">
                                <Button shape="circle" icon={<LockOutlined />} onClick={() => showConfirmLock()} />
                            </Tooltip>
                        )}
                        {e.isactive === 'khoa' && (
                            <Tooltip title="Mở khóa">
                                <Button shape="circle" icon={<UnlockOutlined />} onClick={() => showConfirmUnlock()} />
                            </Tooltip>
                        )}
                    </Space>
                </Space>
            ),
        },
    ];
    const dataForm = [
        {
            formItemProp: {
                name: 'name',
                label: 'Tên nhóm quyền',
            },
            form: <Input placeholder="Nhập tên nhóm quyền" />,
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
                            value: 'all',
                            label: 'Tất cả',
                        },
                        {
                            value: 'active',
                            label: 'Hoạt động',
                        },
                        {
                            value: 'lock',
                            label: 'Khóa',
                        },
                    ]}
                />
            ),
        },
    ];

    return (
        <>
            <Row gutter={[16, 32]}>
                <Col span={24}>
                    <AdvancedSearchForm dataForm={dataForm} />
                </Col>
                <Col span={24}>
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                                onClick={() => {
                                    navigate('/quan-ly-he-thong/quan-ly-nhom-quyen/them-moi-nhom-quyen');
                                }}
                            >
                                Thêm mới nhóm quyền
                            </Button>
                        </Col>
                        <Col span={24}>
                            <Table columns={columns} dataSource={dataNhomQuyen.data} pagination={{ position: 'bottomRight' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default QuanLyNhomQuyen;
