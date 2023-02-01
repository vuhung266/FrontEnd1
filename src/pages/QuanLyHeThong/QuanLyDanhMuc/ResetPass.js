import React from 'react';
import { Modal, message, Button, Tooltip } from 'antd';
import { ExclamationCircleFilled, KeyOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const showConfirmResetPass = ({ data, type }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Reset mật khẩu thành công',
        });
    };
    const ShowConfirm = () => {
        confirm({
            width: 500,
            title: 'Đặt lại mật khẩu',
            content: (
                <>
                    Bạn chắc chắn muốn đặt lại mật khẩu của <b> {data.name} </b>không? <br />
					Mật khẩu mới sẽ được gửi về email <b>{data.email}</b> 
                </>
            ),
            icon: <ExclamationCircleFilled />,
            okText: 'Reset mật khẩu',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
                success();
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
            {type === 'icononly' ? (
                <Tooltip title="Reset mật khẩu">
                    <Button shape="circle" icon={<KeyOutlined />} onClick={() => ShowConfirm()} />
                </Tooltip>
            ) : (
                <Button
                    size="large"
                    onClick={() => {
                        ShowConfirm();
                    }}
                >
                    Reset mật khẩu
                </Button>
            )}
        </>
    );
};

export default showConfirmResetPass;
