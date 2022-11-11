import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Header() {
  return (
    <header >
      <nav className="styleNav navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src="https://movflxx.netlify.app/img/logo/logo.png" alt="" /></a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink style={{ fontSize: "20px", fontWeight: '600' }} className="nav-link" to="/lichchieu">Lịch chiếu </NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ fontSize: "20px", fontWeight: '600' }} className="nav-link" to="/cumrap">Cụm rạp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ fontSize: "20px", fontWeight: '600' }} className="nav-link" to="/tintuc">Tin tức</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={{ fontSize: "20px", fontWeight: '600' }} className="nav-link" to="/ungdung">Ứng dụng</NavLink>
            </li>
          </ul>
          <div className='mr-2'>
            <button style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-success'><i className="fa-regular fa-user"></i> Đăng nhập</button>
          </div>
          <div>
            <button style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-danger'>Đăng ký</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
