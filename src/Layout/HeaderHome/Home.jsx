import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { history } from '../../App'


import { Anchor } from 'antd';

const { Link } = Anchor;


export default function Header() {

  let userInfo = {}
  if (localStorage.getItem('userLogin') !== null) {
    let getLocalVal = JSON.parse(localStorage.getItem('userLogin'));
    userInfo = { ...getLocalVal }
  }

  const clearlocalSto = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userLogin');
    localStorage.removeItem('hasSeenAddToChromeNudge');
    history.push('/');
    window.location.reload();
  }

  return (
    <header >
      <nav className="styleNav navbar navbar-expand-lg navbar-dark">
        <NavLink className="navbar-brand" to='/'><img src="https://movflxx.netlify.app/img/logo/logo.png" alt="..."
        /></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className='nav-item'>
              <Anchor affix={false}>
                <Link href="#lichchieu" title="Lịch Chiếu" />
              </Anchor>
            </li>
            <li className='nav-item'>
              <Anchor affix={false}>
                <Link href="#cumrap" title="Cụm Rạp" />
              </Anchor>
            </li>
            <li className='nav-item'>
              <Anchor affix={false}>
                <Link href="#ungdung" title="Ứng dụng" />
              </Anchor>
            </li>
            {localStorage.getItem('userLogin') !== null ? (<li style={{marginLeft: '50px', fontSize: '18px', marginTop: '8px'}} className='nav-item'>
              <div className="dropdown">
                <NavLink to='/' className="dropdown-toggle text-white" data-toggle="dropdown" aria-expanded="false">
                  Xin chào {userInfo.hoTen} <i className="fa-solid fa-circle-user"></i>
                </NavLink>
                <div className="dropdown-menu">
                  <button onClick={() => {
                    history.push('/profile')
                  }} className="dropdown-item"><i className="fa-solid fa-pen-to-square"></i> Thông tin tài khoản</button>
                  {userInfo.maLoaiNguoiDung === 'QuanTri' ? (
                    <button onClick={() => {
                      history.push('/admin')
                    }} className="dropdown-item"><i className="fa-solid fa-arrow-up-right-from-square"></i> Đến trang admin</button>
                  ) : null}
                  <button onClick={() => {
                    clearlocalSto()
                  }} className="dropdown-item"><i className="fa-solid fa-right-from-bracket"></i> Đăng xuất</button>
                </div>
              </div>
            </li>)
              :
              (<li style={{ marginLeft: '50px' }} className='nav-item'>
                  <button onClick={() => { history.push('/login') }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-success mr-2'><i className="fa-regular fa-user"></i> Đăng nhập</button>
                  <button onClick={() => {
                    history.push('/register')
                  }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-danger'>Đăng ký</button>
              </li>)}
            <div>
            </div>
          </ul>

        </div>
      </nav>
    </header>
  )
}
