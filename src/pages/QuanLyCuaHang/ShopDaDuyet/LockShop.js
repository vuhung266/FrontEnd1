import React from 'react';
import { Modal, message, Button, Tooltip } from 'antd';
import { ExclamationCircleFilled, LockOutlined } from '@ant-design/icons';
const { confirm } = Modal;
const showConfirmLockUser = ({ data, ...props }) => { 
    const [messageApi, contextHolder] = message.useMessage();

    const ShowConfirm = (e) => {
        confirm({
            width: 500,
            title: 'Khóa Shop',
            content: (
                <>
                    Bạn chắc chắn muốn khóa Shop <b> {data.ShopName} </b>không?
                </>
            ),
            icon: <ExclamationCircleFilled />,
            okText: 'Khóa Shop',
            okType: 'danger',
            cancelText: 'Hủy',
            maskClosable: true,
            onOk() {
				props.khoauser(e)
                messageApi.open({
					type: 'success',
					content: 'Khóa Shop thành công',
				});
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
                <Button shape="circle" icon={<LockOutlined />} onClick={() => ShowConfirm(data.ShopName)} />
            </Tooltip>
        </>
    );
};

export default showConfirmLockUser;
