import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './index.css';

export default function Checkout() {

  const { uLogin } = useSelector(state => state.UserReducers)
  console.log({ uLogin })


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-9">
          <div className='manHinh'>
            <div className='bg-dark' style={{ width: '80%', height: '15px' }}>
             
            </div>
            <div className='trapezoid text-center'>
             <h3 className='mt-2 text-black'>Màn hình</h3>
            </div>
          </div>

        </div>
        <div className="col-3">
          <h3 className='text-center'>0 đ</h3>
          <hr />
          <h3>Tên Phim</h3>
          <p>Địa điểm</p>
          <p>Ngày chiếu</p>
          <hr />
          <div className='row my-5'>
            <div className="col-6">
              <span>Ghế</span>
            </div>
            <div className="col-6 text-right">
              <span>0 đ</span>
            </div>
          </div>
          <hr />
          <div className='my-5'>
            <i>Email</i> <br />
            {uLogin.email}
          </div>
          <div className='my-5'>
            <i>Phone</i> <br />
            {uLogin.soDT}
          </div>
          <hr />
          <div className='styleDatve'>
            <div className='clickDatve bg-success text-white'>
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}
