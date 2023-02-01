import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Quản lý cửa hàng', 'quan-ly-cua-hang', <AppstoreOutlined />, [
        getItem('Danh sách chờ cập nhật', 'quan-ly-cua-hang/danh-muc-mo'),
        getItem('Danh sách chờ duyệt', 'quan-ly-cua-hang/danh-muc-ces'),
        getItem('Danh sách đã duyệt', 'quan-ly-cua-hang/danh-muc-ces'),
        getItem('Danh sách từ chối', 'quan-ly-cua-hang/danh-muc-ces'),
    ]),
    getItem('QL danh mục cửa hàng', 'quan-ly-danh-muc-cua-hang', <AppstoreOutlined />, [
        getItem('Danh mục MO', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
        getItem('Danh mục CES', 'quan-ly-danh-muc-cua-hang/danh-muc-ces'),
    ]),
    getItem('Quản lý thương hiệu', 'quan-ly-thuong-hieu', <AppstoreOutlined />, [
        getItem('Danh sách các thương hiệu', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
    ]),
    getItem('Tham số hệ thống', 'tham-so-he-thong', <AppstoreOutlined />, [
        getItem('Cấu hình lý do từ chối cập nhật', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
        getItem('Cấu hình lý do từ chối duyệt', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
        getItem('Cấy hình lý do khách hàng Report', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
    ]),
    getItem('Báo cáo', 'sub4', <SettingOutlined />, [
        getItem(
            'Báo cáo duyệt',
            'http://google.com',
            (<AppstoreOutlined />)[
                (getItem('Cấu hình lý do từ chối cập nhật', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'),
                getItem('Cấu hình lý do từ chối duyệt', 'quan-ly-danh-muc-cua-hang/danh-muc-mo'))
            ],
        ),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];
const App = ({ selected }) => {
    let string = selected.split('/');
    selected = string['0'] + '/' + string['1'];
    const [open, setOpen] = useState(string['0']);

    useEffect(() => {
        setOpen(string['0']);
        console.log(open);
    }, [open, string]);
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(`/${e.keyPath[0]}`);
    };
    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={selected}
            defaultOpenKeys={[open]}
            mode="inline"
            items={items}
        />
    );
};
export default App;
