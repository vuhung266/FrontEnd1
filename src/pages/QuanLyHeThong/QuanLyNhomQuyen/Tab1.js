import React from 'react';
import { Tree } from 'antd';
import type { DataNode, TreeProps } from 'antd/es/tree';

const treeData: DataNode[] = [
    {
        title: 'Chọn tất cả',
        key: '0-0',
        children: [
            {
                title: 'Danh sách cửa hàng chờ cập nhật',
                key: '0-0-0',
                children: [
                    {
                        title: 'Xem tất cả User',
                        key: '0-0-0-1',
                    },
                    {
                        title: 'Xem của mình',
                        key: '0-0-0-2',
                        disableCheckbox: true,
                    },
                    {
                        title: 'Xuất file excel',
                        key: '0-0-0-3',
                    },
                    {
                        title: 'Chỉnh sửa',
                        key: '0-0-0-4',
                    },
                    {
                        title: 'Cập nhật/ Từ chối cập nhật thông tin',
                        key: '0-0-0-5',
                    },
                    {
                        title: 'Chia cửa hàng theo User',
                        key: '0-0-0-6',
                    },
                ],
            },
            {
                title: 'Danh sách cửa hàng chờ phê duyệt',
                key: '0-0-1',
                children: [
                    {
                        title: 'Xem tất cả User',
                        key: '0-0-1-0',
                    },
                    {
                        title: 'Xem của mình',
                        key: '0-0-1-1',
                        disableCheckbox: true,
                    },
                    {
                        title: 'Xuất file excel',
                        key: '0-0-1-2',
                    },
                    {
                        title: 'Chỉnh sửa',
                        key: '0-0-1-3',
                    },
                    {
                        title: 'Cập nhật/ Từ chối cập nhật thông tin',
                        key: '0-0-1-4',
                    },
                    {
                        title: 'Chia cửa hàng theo User',
                        key: '0-0-1-5',
                    },
                ],
            },
        ],
    },
];

const Tab1: React.FC = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <Tree
			selectable = {false}
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
        />
    );
};

export default Tab1;
