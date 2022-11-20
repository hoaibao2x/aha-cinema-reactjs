import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userInfoAction } from '../../../redux/Users/action/userAction';
import './index.css'

function Profile(props) {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(userInfoAction())
    }, [])

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
                    <form id='myForm'>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="email">Email:</label>
                                    <input name="email" id='email' type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="taiKhoan">Tài khoản:</label>
                                    <input name="taiKhoan" id='taiKhoan' type="text" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="hoTen">Họ tên:</label>
                                    <input name="hoTen" id='hoTen' type="text" className='form-control' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="matKhau">Mật khẩu:</label>
                                    <input name="matKhau" id='matKhau' type="password" className='form-control' />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="soDT">Số điện thoại:</label>
                                    <input name="soDT" id='soDT' type="text" className='form-control' />
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