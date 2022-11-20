import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../../App';
import { getInfoUserAction, updateInfoAction } from '../../../redux/Users/action/userAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { USERLOGIN } from '../../../util/varsSetting';
import './index.css'

function Profile() {

    let dispatch = useDispatch();

    let { thongTinNguoiDung } = useSelector((state) => state.UserReducers);

    console.log(thongTinNguoiDung.thongTinDatVe)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: thongTinNguoiDung.email,
            taiKhoan: thongTinNguoiDung.taiKhoan,
            hoTen: thongTinNguoiDung.hoTen,
            matKhau: thongTinNguoiDung.matKhau,
            soDT: thongTinNguoiDung.soDT
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email không được để trống !").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email không đúng định dạng !"),
            taiKhoan: Yup.string().required("Tài khoản không được để trống !").matches(/^(?=.*\d)(?=.*[A-Z a-z])(?!.*[ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý])(?!.*\s).{0,}$/, "Tài khoản phải bao gồm chữ, số và không chứa ký tự khoảng trắng !"
            ),
            hoTen: Yup.string().required("Họ tên không được để trống !"),
            matKhau: Yup.string().required("Mật khẩu không được để trống !").matches(/^(?=.*\d)(?=.*[A-Z a-z])(?!.*[ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý])(?!.*\s).{0,}$/, "Mật khâu phải bao gồm chữ, số và không chứa ký tự khoảng trắng !"),
            soDT: Yup.string().required("Số điện thoại không được để trống !").matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, "Số điện thoại không đúng định dạng !"
            )
        }),
        onSubmit: (values) => {
            // console.log(values);
            dispatch(updateInfoAction(values))
        }
    })

    const areYouLogin = () => {
        if (localStorage.getItem(USERLOGIN)) {
            alert('Hi')
            dispatch(getInfoUserAction());
        } else {
            alert('Bạn phải đăng nhập !');
            return history.push('/login')
        }
    }

    useEffect(() => {
        areYouLogin();
    }, [])



    const renderTicketsHis = () => {
        return thongTinNguoiDung.thongTinDatVe.map((ticket) => {
            return <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-2">
                        <img className='img-fluid' width={150} src={ticket.hinhAnh} alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        })
    }

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
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name="email" id='email' type="text" className='form-control' />
                                    {formik.touched.email && formik.errors.email ? (<div className='alert alert-danger mt-2'>{formik.errors.email}</div>) : null}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="taiKhoan">Tài khoản:</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taiKhoan} name="taiKhoan" id='taiKhoan' type="text" className='form-control' />
                                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (<div className='alert alert-danger mt-2'>{formik.errors.taiKhoan}</div>) : null}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="hoTen">Họ tên:</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.hoTen} name="hoTen" id='hoTen' type="text" className='form-control' />
                                    {formik.touched.hoTen && formik.errors.hoTen ? (<div className='alert alert-danger mt-2'>{formik.errors.hoTen}</div>) : null}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="matKhau">Mật khẩu:</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} name="matKhau" id='matKhau' type="password" className='form-control' />
                                    {formik.touched.matKhau && formik.errors.matKhau ? (<div className='alert alert-danger mt-2'>{formik.errors.matKhau}</div>) : null}
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className='font-weight-bold' htmlFor="soDT">Số điện thoại:</label>
                                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.soDT} name="soDT" id='soDT' type="text" className='form-control' />
                                    {formik.touched.soDT && formik.errors.soDT ? (<div className='alert alert-danger mt-2'>{formik.errors.soDT}</div>) : null}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group mt-3">
                                    <button type='submit' className="btn btn-info mt-3"><i className="fa-solid fa-pen-to-square"></i> Cập nhật</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className='' style={{ height: "254px", overflowX: 'hidden', overflowY: "scroll" }}>
                        {renderTicketsHis()}
                        {/* <div className="row">
                            <div className="col-md-4"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profile