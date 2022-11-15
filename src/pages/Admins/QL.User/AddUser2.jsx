import { useFormik } from 'formik';
import { GP_ID } from '../../../util/varsSetting';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { themNguoiDungAction } from '../../../redux/Admins/action/QLNDAcition';
import React, { useState } from 'react';

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};

const AddNewUser = () => {
    const dispatch = useDispatch();


    const formik = useFormik({
        // giá trị khởi toạ (data cần luuw trữ )
        initialValues: {
          taiKhoan: "",
          matKhau: "",
          email: "",
          soDt: "",
          maNhom: GP_ID,
          maLoaiNguoiDung: "KhachHang",
          hoTen: ""
        },
   
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("tài khoảng khoảng được bỏ trống"),
            matKhau: Yup.string().required("mật khẩu không được để trống"),
            email: Yup.string().required("email không được để trống").email("email chưa đúng định dạng"),
            hoTen: Yup.string().required("họ tên không được đẻ trống").matches(/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, "họ tên không đúng định dạng"),
            soDt: Yup.string().required("số điện thoại không được để trống").matches(/^(?=.*\d)^[0-9]+$/, "số điện thoại không đúng định dạng"),
            maLoaiNguoiDung:Yup.string().required("hãy chọn loại người dùng")
          }),
      
          onSubmit: (values) => {
           
            console.log(values)
            let userInfo2 = new FormData();
            for(let key in values){
                userInfo2.append(key,values[key]);
            }
            console.log(userInfo2.get("hoTen")); 
            dispatch(themNguoiDungAction(userInfo2));

          },
    })





    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

  
    return (
        <Form
        onSubmitCapture={formik.handleSubmit}
            className='container'
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <h3>Thêm Người Dùng Mới</h3>
            <Form.Item
                name="taiKhoan"
                label="Tài Khoản">
                <Input name='taiKhoan'  onChange={formik.handleChange} value={formik.values.taiKhoan} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
              <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
            ) : null}
            </Form.Item>
            <Form.Item name="hoTen" label="Họ Tên" >
                <Input name="hoTen"  onChange={formik.handleChange} value={formik.values.hoTen} onBlur={formik.handleBlur}  />
                {formik.errors.hoTen ? (
              <div className='alert alert-danger'>{formik.errors.hoTen}</div>
            ) : null}
                
            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"
               
            >
                <Input name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                {formik.errors.email ? (
              <div className='alert alert-danger'>{formik.errors.email}</div>
            ) : null}
            </Form.Item>
            <Form.Item
                name="soDt"
                label="Số Điện Thoại"
                >
                <Input
                    name='soDt' onChange={formik.handleChange} value={formik.values.soDt}
                    style={{
                        width: '100%',
                    }}
                />
            
                 
            {formik.errors.soDt ? (
              <div className='alert alert-danger'>{formik.errors.soDt}</div>
            ) : null}
            </Form.Item>
           
            <Form.Item
                name="matKhau"
                label="Password">
                <Input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} onBlur={formik.handleBlur} />
                {formik.errors.matKhau ? (
              <div className='alert alert-danger'>{formik.errors.matKhau}</div>
            ) : null}
            </Form.Item>
           
          
            <Form.Item
                name="maLoaiNguoiDung"
                label="Loại Người Dùng"
             
            >
                <Select placeholder="Chọn Loại Người Dùng">
                    <Option >Loại Người Dùng :</Option>
                    <Option value="KhachHang">1: Khách Hàng</Option>
                    <Option value="QuanTri">2: Quảng Trị</Option>
                    {formik.errors.maLoaiNguoiDung ? (
              <div className='alert alert-danger'>{formik.errors.maLoaiNguoiDung}</div>
            ) : null}
                </Select>
                
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button
                    type='submit'
                    className='btn btn-success'>
                    Hoàng Thành
                </button>
            </Form.Item>
        </Form>
    );
};
export default AddNewUser;