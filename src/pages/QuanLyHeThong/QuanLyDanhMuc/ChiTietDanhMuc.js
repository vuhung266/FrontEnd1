import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Input, Row, Col, Card, Form, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as menuServices from '~/services/menuService';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'swiper/css';
const { Meta } = Card;
const { TextArea } = Input;
const QuanLyChiTietDanhMuc = () => {
  const [formHDSD] = Form.useForm();
  const [itemHDSD, setItemHDSD] = useState([]);
  const [initialValuesHDSD, setinitialValuesHDSD] = useState([]);
  const params = useParams(); console.log(params);
  const { data, refetch } = useQuery(
    'HDSDData',
    () => fetch('http://localhost:4000/detail_hdsd').then((res) => res.json()),
    { refetchOnWindowFocus: false },
  );
  useEffect(() => {

  }, [])
  const GetAllItemsbyPid = (pid) => {
    if (data) {
      let filteredArr = data.filter(function (item) {
        return item.pid === pid;
      });
      return filteredArr;
    } else {
      return [];
    }
  };
  useEffect(() => {
    setItemHDSD(GetAllItemsbyPid(params.id));
  }, []);
  const confirmDelete = (e) => {
    deleteMenuItem(e.id);
    setItemHDSD(prevSlides => prevSlides.filter(slide => slide.id !== e.id));
  };
  async function deleteMenuItem (id) {
    await menuServices.deleteItemHDSD(id);
    message.info(`Xóa thành công`);
  }
  const addHDSD = async (e) => {
    e.pid = itemHDSD.id
    console.log(e);
    await axios.post('http://localhost:4000/detail_hdsd', e);
    // refetch()
    // let dataFromDetailHDSD = GetAllItemsbyPid(e.pid); console.log(dataFromDetailHDSD);
    // setDataSlideHDSD(dataFromDetailHDSD); 
  };
  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className="mycustomswiper"
      >
        {itemHDSD.map((e) => {
          // const randomNumber = Math.floor(Math.random() * 100);
          return (
            <SwiperSlide key={e.id}>
              Step: {e.step} Pid: {e.pid}
              <Popconfirm
                placement="top"
                title="Xóa nội dung"
                description="Bạn chắc muốn xóa step này chứ?"
                onConfirm={() => confirmDelete(e)}
                okText="Xác nhận xóa"
                cancelText="Không"
              >
                <Button shape="circle" icon={<DeleteOutlined />} size="small" />
              </Popconfirm>
              <Card
                hoverable
                style={{ width: 240 }}
              // cover={<img alt="example" src={`https://picsum.photos/240/300?random=${randomNumber}`} />}
              >
                <Meta title={e.name} description={e.desc} />
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
        <Col span={24}>
          <Form
            form={formHDSD}
            layout=""
            name="form_HDSD"
            initialValues={initialValuesHDSD}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            labelAlign="left"
          >
            <Form.Item label="Step" name="step" required={true}>
              <Input />
            </Form.Item>
            <Form.Item label="Link ảnh" name="img" required={true}>
              <Input />
            </Form.Item>
            <Form.Item label="Tên" name="name" required={true}>
              <Input />
            </Form.Item>
            <Form.Item label="Mô tả" name="desc" required={true}>
              <TextArea />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default QuanLyChiTietDanhMuc;
