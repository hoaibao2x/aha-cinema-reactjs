import { useFormik } from 'formik';
import { GP_ID } from '../../../util/varsSetting';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinUserAction, themNguoiDungAction } from '../../../redux/Admins/action/QLNDAcition';
import { UserComponent } from "../QL.User/UserComponent"
import { QLNDreducer } from '../../../redux/Admins/reducers/QLNDreducer';
import React, { useEffect, useState } from 'react';

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

const EditUser = (props) => {
    const {thongTinUser} = useSelector(state => state.QLNDreducer);
    console.log(thongTinUser)
    const dispatch = useDispatch();
     useEffect(() => { 
        let {id} = props.match.params
        dispatch(layThongTinUserAction(id))
      },[])


    const formik = useFormik({
        enableReinitialize:true,
        // giá trị khởi toạ (data cần luuw trữ )
        initialValues: {
            taiKhoan:"",
            matKhau: thongTinUser?.matKhau,
            email:thongTinUser?.taiKhoan ,
            soDt: thongTinUser?.soDt,
            maNhom: GP_ID,
            maLoaiNguoiDung:thongTinUser?.maLoaiNguoiDung ,
            hoTen: thongTinUser?.hoTen
        },

        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("tài khoảng khoảng được bỏ trống"),
            matKhau: Yup.string().required("mật khẩu không được để trống"),
            email: Yup.string().required("email không được để trống").email("email chưa đúng định dạng"),
            hoTen: Yup.string().required("họ tên không được đẻ trống").matches(/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, "họ tên không đúng định dạng"),
            soDt: Yup.string().required("số điện thoại không được để trống").matches(/^(?=.*\d)^[0-9]+$/, "số điện thoại không đúng định dạng"),
            // maLoaiNguoiDung: Yup.string().required("hãy chọn loại người dùng")
        }),

        onSubmit: (values) => {

            dispatch(themNguoiDungAction(values));


        },
    })


    const [form] = Form.useForm();

  

    return (

        <Form
            onSubmitCapture={formik.handleSubmit}
            className='container'
            {...formItemLayout}
            form={form}
            name="register"
          
            scrollToFirstError
        >

            <h3>Sữa Thông Tin Người Dùng</h3>
            <Form.Item
                name="taiKhoan"
                label="Tài Khoản">
                <Input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                    <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
                ) : null}
            </Form.Item>
            <Form.Item name="hoTen" label="Họ Tên" >
                <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} onBlur={formik.handleBlur} />
                {formik.errors.hoTen ? (
                    <div className='alert alert-danger'>{formik.errors.hoTen}</div>
                ) : null}

            </Form.Item>
            <Form.Item
                name="email"
                label="E-mail"

            >
                <Input name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
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
               
                label="Loại Người Dùng"

            >
            
                <div className="form-group">
                
                    <select name='maLoaiNguoiDung' onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} onBlur={formik.handleBlur} className="form-control" >
                        <option  value="">Hãy Chọn Loại Người Dùng</option>
                        <option value='KhachHang'>Khách Hàng</option>
                        <option value='QuanTri'>Quảng Trị</option>
                        
                    </select>
                
                    
                </div>
               
               
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button
                    type='submit'
                    className='btn btn-success'>
                    Hoàn thành
                </button>
            </Form.Item>
        </Form>
    );
};
export default EditUser;