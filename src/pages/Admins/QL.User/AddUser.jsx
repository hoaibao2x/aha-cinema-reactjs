import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GP_ID } from '../../../util/varsSetting';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../../redux/action/admin/QLNDAcition';
import { Button, Checkbox, Form, Input } from 'antd';




export default function AddUser(props) {
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
      maLoaiNguoiDung:Yup.string().required("hãy chọn loại người dùng")
    }),

    onSubmit: values => {
      let action = dangKyAction(values);
      dispatch(action);
    },
  });



  return (
    <div className=' container mt-5'>
      <h3>Thêm Người Dùng</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className='form-group col-6'>
            <input name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} onBlur={formik.handleBlur} type="text" className='form-control' placeholder=" tài khoảng" />
            {/* thông báo lổi  */}
            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
              <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
            ) : null}

          </div>
          <div className='form-group col-6'>
            <input name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} onBlur={formik.handleBlur} type="password" className='form-control' placeholder="mật khẩu" />

            {formik.errors.matKhau ? (
              <div className='alert alert-danger'>{formik.errors.matKhau}</div>
            ) : null}

          </div>
          <div className='form-group col-6'>
            <input name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} onBlur={formik.handleBlur} type="text" className='form-control' placeholder="họ tên" />

            {formik.errors.hoTen ? (
              <div className='alert alert-danger'>{formik.errors.hoTen}</div>
            ) : null}
          </div>
          <div className='form-group col-6'>
            <input name='soDt' onChange={formik.handleChange} value={formik.values.soDt} type="text" className='form-control' placeholder="số điện thoại" />
            
            {formik.errors.soDt ? (
              <div className='alert alert-danger'>{formik.errors.soDt}</div>
            ) : null}
          </div>
          <div className='form-group col-6'>
            <input name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} type="text" className='form-control' placeholder="email" />

            {formik.errors.email ? (
              <div className='alert alert-danger'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='form-group col-6'>

           
            <select name='maLoaiNguoiDung' onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} type="text" className='form-control' placeholder="loại người dùng">
              <option className='text-danger'>loại người dùng</option>
              <option value="khachHang">khách hàng</option>
              <option value="quangTri">quảng trị viên</option>
            </select>
            {formik.errors.maLoaiNguoiDung ? (
              <div className='alert alert-danger'>{formik.errors.maLoaiNguoiDung}</div>
            ) : null}
          </div>

          <div className="col-12 text-center ">
          
            <button className='btn btn-info mx-5'>Thêm Người Dùng</button>
            <button className='btn btn-success px-5'>Cập Nhật</button>
          </div>

        </div>

      </form>
    </div>
  )
}
