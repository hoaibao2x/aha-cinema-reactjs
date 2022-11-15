import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../App'
import './index.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { GP_ID } from '../../../util/varsSetting'
import registerImg from './assets/imgs/register.jpg'
import { userRegisAction } from '../../../redux/Users/action/userAction'
import { useDispatch } from 'react-redux'

function RegisterComponent() {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maLoaiNguoiDung: 'KhachHang',
            maNhom: GP_ID
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được để trống !').matches(/^(?=.*\d)(?=.*[A-Z a-z])(?!.*[ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý])(?!.*\s).{0,}$/, 'Tên tài khoản bao gồm chữ và ký tự số, không bao gồm tiếng việt có dấu và khoảng trắng !'),
            matKhau: Yup.string().required('Mật khẩu không được để trống !').matches(/^(?=.*\d)(?=.*[A-Z a-z])(?!.*[ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý])(?!.*\s).{0,}$/, 'Mật khẩu bao gồm chữ và ký tự số, không bao gồm tiếng việt có dấu và khoảng trắng !'),
            email: Yup.string().required('Email không được để trống !').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email không đúng định dạng !'),
            soDt: Yup.string().required('Số điện thoại không được để trống !').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại không đúng định dạng !'),
            hoTen: Yup.string().required('Họ tên không được để trống !').matches(/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/, 'Họ tên không đúng định dạng !')
        }),
        onSubmit: values => {
            dispatch(userRegisAction(values))
        }
    })

    return (
        <div className='register__content'>
            <div className="row container mx-auto">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid register-img' src={registerImg} alt="..." />
                </div>
                <div className="col-sm-12 col-md-6">
                    <form onSubmit={formik.handleSubmit} className='content__form mt-4'>
                        <h2 className='text-center text-white'>Đăng ký</h2>
                        <div className="form-group">
                            <label className='text-white' htmlFor="taiKhoan">Tài khoản:</label>
                            <input name='taiKhoan' type="text" className="form-control" id="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (<div className='alert alert-danger mt-2'>{formik.errors.taiKhoan}</div>) : null}
                        </div>

                        <div className="form-group">
                            <label className='text-white' htmlFor="matKhau">Mật khẩu:</label>
                            <input name='matKhau' type="password" className="form-control" id="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.matKhau && formik.errors.matKhau ? (<div className='alert alert-danger mt-2'>{formik.errors.matKhau}</div>) : null}
                        </div>

                        <div className="form-group">
                            <label className='text-white' htmlFor="email">Email:</label>
                            <input name='email' type="text" className="form-control" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? (<div className='alert alert-danger mt-2'>{formik.errors.email}</div>) : null}
                        </div>

                        <div className="form-group">
                            <label className='text-white' htmlFor="soDt">Số điện thoại:</label>
                            <input name='soDt' type="text" className="form-control" id="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.soDt && formik.errors.soDt ? (<div className='alert alert-danger mt-2'>{formik.errors.soDt}</div>) : null}
                        </div>
                        <div className="form-group">
                            <label className='text-white' htmlFor="hoTen">Họ tên:</label>
                            <input name='hoTen' type="text" className="form-control" id="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.hoTen && formik.errors.hoTen ? (<div className='alert alert-danger mt-2'>{formik.errors.hoTen}</div>) : null}
                        </div>
                        <div className="form-action d-flex justify-content-between">
                            <div>
                                <button className="btn btn-success mr-3">Đăng ký</button>
                                <button onClick={() => { history.push('/login') }} type='button' className="btn btn-info">Đăng nhập</button>
                            </div>
                            <NavLink className="" to='/'><i className="fa-solid fa-arrow-right-to-bracket"></i> Quay về trang chủ</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterComponent