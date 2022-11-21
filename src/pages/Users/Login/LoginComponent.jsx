import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../../../redux/Users/action/userAction'
import './index.css'
import { history } from '../../../App'
import { NavLink } from 'react-router-dom'
import registerImg from '../../../assets/Users/imgs/register.jpg'

function LoginComponent() {

    let dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được để trống !'),
            matKhau: Yup.string().required('Mật khẩu không được để trống !')
        }),
        onSubmit: values => {
            let action = userLoginAction(values);
            dispatch(action)
        }
    })

    return (
        <div className='login__content'>
            <div className="row container mx-auto">
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid register-img' src={registerImg} alt="..." />
                </div>
                <div className="col-sm-12 col-md-6">
                    <form onSubmit={formik.handleSubmit} className='content__form text-white'>
                        <h2 className='text-center text-white'>Đăng nhập</h2>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tên đăng nhập:</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='taiKhoan' className="form-control" id="exampleInputEmail1" />
                            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (<div className="alert alert-danger mt-2">{formik.errors.taiKhoan}</div>) : null}

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mật khẩu:</label>
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" name='matKhau' className="form-control" id="exampleInputPassword1" />
                            {formik.touched.matKhau && formik.errors.matKhau ? (<div className="alert alert-danger mt-2">{formik.errors.matKhau}</div>) : null}
                        </div>
                        <div className="form-action">
                            <NavLink className="home__link d-block mb-1" to='/'><i className="fa-solid fa-arrow-right-to-bracket"></i> Quay về trang chủ</NavLink>
                            <br />
                            <button className="btn btn-success mr-3">Đăng nhập</button>
                            <button onClick={() => { history.push('/register') }} type='button' className="btn btn-info">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent