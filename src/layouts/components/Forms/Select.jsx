import { Select, Space, Button, Divider } from 'antd';
import { useState } from 'react';

function MySelectAll ({ options, ...props }) {
  const [value, setValue] = useState([]);
  const [buttonTitle, setButtonTitle] = useState('Chọn tất cả');

  function handleSelectAll () {
    if (value.length === options.length) {
      setValue([]);
      setButtonTitle('Chọn tất cả');
    } else {
      setValue(options.map(option => option.value));
      setButtonTitle('Bỏ chọn tất cả');
    }
  }

  function handleChange(newValue) {
    setValue(newValue);
    if (newValue.length === options.length) {
      setButtonTitle('Bỏ chọn tất cả');
    } else {
      setButtonTitle('Chọn tất cả');
    }
  }


  return (
    <Select
      {...props}
      mode="multiple"
      value={value}
      options={options}
      onChange={handleChange}
      dropdownRender={menu => (
        <>
          <Space style={{ padding: '4px 12px 0 12px' }}>
            <Button size='small' onClick={handleSelectAll}>{buttonTitle}</Button>
          </Space>
          <Divider style={{ margin: '8px 0' }} />
          {menu}
        </>
      )}
    />
  );
}

export { MySelectAll }