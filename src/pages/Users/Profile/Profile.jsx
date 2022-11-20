import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../../App';
import { userInfoAction } from '../../../redux/Users/action/userAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { USERLOGIN } from '../../../util/varsSetting';
import './index.css'

function Profile(props) {

    let dispatch = useDispatch();

    let { uBookTickets } = useSelector((state) => state.UserReducers);
    console.log(uBookTickets)

    let myInfo = {};
     myInfo = {...uBookTickets}

    const areYouLogin = () => {
        if (localStorage.getItem(USERLOGIN)) {
            dispatch(userInfoAction());
        } else {
            alert('Bạn phải đăng nhập !');
            return history.push('/login')
        }
    }

    useEffect(() => {
        areYouLogin()
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            // email: uBookTickets.email,
            // taiKhoan: uBookTickets.taiKhoan,
            // hoTen: myInfo.hoTen,
            // matKhau: myInfo.matKhau,
            // soDT: myInfo.soDT
        },
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className='container mx-auto'>
            <div style={{ height: '110px' }}></div>
            <ul className="nav nav-tabs" id="profileTab myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab">Thông tin cá nhân</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab">Lịch sử đặt vé</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <form onSubmitCapture={formik.handleSubmit} id='myForm'>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="email">Email:</label>
                                    <input onChange={formik.handleChange} value={formik.values.email} name="email" id='email' type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="taiKhoan">Tài khoản:</label>
                                    <input value={formik.values.taiKhoan} name="taiKhoan" id='taiKhoan' type="text" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="hoTen">Họ tên:</label>
                                    <input onChange={formik.handleChange} value={formik.values.hoTen} name="hoTen" id='hoTen' type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="matKhau">Mật khẩu:</label>
                                    <input value={formik.values.matKhau} name="matKhau" id='matKhau' type="password" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="soDT">Số điện thoại:</label>
                                    <input value={formik.values.soDT} name="soDT" id='soDT' type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mt-3">
                                    <button className="btn btn-info mt-3"><i className="fa-solid fa-pen-to-square"></i> Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile