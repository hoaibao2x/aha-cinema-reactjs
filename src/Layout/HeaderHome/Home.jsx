import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { history } from '../../App'


import { Anchor } from 'antd';

const { Link } = Anchor;


export default function Header() {


  return (
    <header >
      <nav className="styleNav navbar navbar-expand-sm navbar-dark">
        <NavLink className="navbar-brand" to='/'><img src="https://movflxx.netlify.app/img/logo/logo.png" alt="..."
        /></NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data- target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
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
          </ul>
          <div className='mr-2'>
            <button onClick={() => { history.push('/login') }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-success'><i className="fa-regular fa-user"></i> Đăng nhập</button>
          </div>
          <div>
            <button onClick={() => { 
              history.push('/register')
             }} style={{ padding: "10px 15px", fontSize: "16px", fontWeight: '600' }} className='btn btn-danger'>Đăng ký</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
