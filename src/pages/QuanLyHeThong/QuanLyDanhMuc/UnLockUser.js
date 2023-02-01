import React from 'react';
import { Modal, message, Button, Tooltip } from 'antd';
import { ExclamationCircleFilled, UnlockOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showConfirmUnlockUser = ({ data, khoauser }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Unlock user successful',
        });
    };

    const showConfirm = () => {
        confirm({
            width: 500,
            title: 'Unlock user',
            content: (
                <>
                    Are you sure you want to unlock user <b>{data.name}</b>?
                </>
            ),
            icon: <ExclamationCircleFilled />,
            okText: 'Unlock',
            okType: 'danger',
            cancelText: 'Cancel',
            maskClosable: true,
            onOk() {
                success();
                khoauser(data.email);
            },
            onCancel() {
                console.log('Cancelled');
            },
        });
    };

    return (
        <>
			{contextHolder}
            <Tooltip title="Unlock">
                <Button shape="circle" icon={<UnlockOutlined />} onClick={showConfirm} />
            </Tooltip>
            
        </>
    );
};

export default showConfirmUnlockUser;
