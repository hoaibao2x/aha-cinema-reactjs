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
            <Anchor affix={false}>
              <Link href="#lichchieu" title="Lịch Chiếu" />
            </Anchor>
            <Anchor affix={false}>
              <Link href="#cumrap" title="Cụm Rạp" />
            </Anchor>
            <Anchor affix={false}>
              <Link href="#ungdung" title="Ứng dụng" />
            </Anchor>
            <div>
            </div>
          </ul>
          {localStorage.getItem('userLogin') !== null ? (<>
            <div className="dropleft text-right">
              <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                Xin chào {userInfo.hoTen.substr(0,1)} <i className="fa-solid fa-circle-user"></i>
              </button>
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
          </>)
            :
            (<>
              <div className='mr-2'>
                <button onClick={() => { history.push('/login') }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-success'><i className="fa-regular fa-user"></i> Đăng nhập</button>
              </div>
              <div>
                <button onClick={() => {
                  history.push('/register')
                }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-danger'>Đăng ký</button>
              </div>
            </>)}
        </div>
      </nav>
    </header>
  )
}
