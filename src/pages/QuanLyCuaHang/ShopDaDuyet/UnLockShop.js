import React from 'react';
import { Modal, message, Button, Tooltip } from 'antd';
import { ExclamationCircleFilled, UnlockOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showConfirmUnlockUser = ({ data, khoauser }) => {
    const [messageApi, contextHolder] = message.useMessage();

    const showConfirm = () => {
        confirm({
            width: 500,
            title: 'Mở khóa Shop',
            content: (
                <>
                    Bạn có muốn mở khóa cho Shop <b>{data.ShopName}</b> không?
                </>
            ),
            icon: <ExclamationCircleFilled />,
            okText: 'Mở khóa',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                khoauser(data.ShopName);
                messageApi.open({
                    type: 'success',
                    content: 'Mở khóa Shop thành công',
                });
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
