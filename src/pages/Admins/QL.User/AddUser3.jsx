import { useFormik } from 'formik';
import { GP_ID } from '../../../util/varsSetting';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { layThongTinUserAction, themNguoiDungAction } from '../../../redux/Admins/action/QLNDAcition';
import { UserComponent } from "../QL.User/UserComponent"
import { QLNDreducer } from '../../../redux/Admins/reducers/QLNDreducer';
import React, { useEffect, useState } from 'react';


import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
const AddNewUser3 = () => {

    const dispatch = useDispatch();


    const formik = useFormik({
        // giá trị khởi toạ (data cần luuw trữ )
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: GP_ID,
            maLoaiNguoiDung: "",
            hoTen: ""
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

            console.log(values)
           
            dispatch(themNguoiDungAction(values));


        },
    })


    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <Form
          onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <h3>thêm người dung mới</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="Tài khoảng ">
                <Input
                    name='taiKhoan'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                    <div
                        className='alert alert-danger mt-2'
                    >
                        {formik.errors.taiKhoan}
                    </div>
                ) : null}
            </Form.Item>
            <Form.Item label="Mật Khẩu ">
                <Input
                    name='matKhau'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.matKhau && formik.errors.matKhau ? (
                    <div
                        className='alert alert-danger mt-2'
                    >
                        {formik.errors.matKhau}
                    </div>
                ) : null}
            </Form.Item>
            <Form.Item label="email">
                <Input
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div
                        className='alert alert-danger mt-2'
                    >
                        {formik.errors.email}
                    </div>
                ) : null}
            </Form.Item>
            <Form.Item label="Số Điện Thoại ">
                <Input
                    name='soDt'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.soDt && formik.errors.soDt ? (
                    <div
                        className='alert alert-danger mt-2'
                    >
                        {formik.errors.soDt}
                    </div>
                ) : null}
            </Form.Item>
            <Form.Item label="Họ Tên ">
                <Input
                    name='hoTen'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.taihoTenKhoan && formik.errors.hoTen ? (
                    <div
                        className='alert alert-danger mt-2'
                    >
                        {formik.errors.hoTen}
                    </div>
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
export default AddNewUser3;