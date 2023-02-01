import React from 'react';
import { Modal, message, Button, Tooltip } from 'antd';
import { ExclamationCircleFilled, LockOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const showConfirmLockUser = ({ data, ...props }) => { 
    const [messageApi, contextHolder] = message.useMessage();

    const ShowConfirm = (e) => {
        confirm({
            width: 500,
            title: 'Khóa người dùng',
            content: (
                <>
                    Bạn chắc chắn muốn khóa người dùng <b> {data.name} </b>không?
                </>
            ),
            icon: <ExclamationCircleFilled />,
            okText: 'Khóa người dùng',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
				props.khoauser(e)
                messageApi.open({
					type: 'success',
					content: 'Khóa người dùng thành công',
				});
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
		
    };

    return (
        <>
            {contextHolder}
            <Tooltip title="Khóa">
                <Button shape="circle" icon={<LockOutlined />} onClick={() => ShowConfirm(data.email)} />
            </Tooltip>
        </>
    );
};

export default showConfirmLockUser;
