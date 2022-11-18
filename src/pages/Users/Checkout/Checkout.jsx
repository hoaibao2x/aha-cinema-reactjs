import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styleGhe.css';
import { getDetailTicketAction } from "../../../redux/Users/action/QuanLyDatVeAction";
import { CloseOutlined } from '@ant-design/icons';
import { BOOK_TICKET } from '../../../redux/Users/type/QuanLyDatVeType';
import _ from 'lodash';



export default function Checkout(props) {

  const { uLogin } = useSelector(state => state.UserReducers);
  const { detailTicket, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
  console.log({ danhSachGheDangDat })
  const { thongTinPhim, danhSachGhe } = detailTicket

  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    let action = getDetailTicketAction(id);
    dispatch(action)
  }, []);


  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
      if (indexGheDD !== -1) {
        classGheDangDat = 'gheDangDat';
      }

      return <Fragment key={index}>
        <button onClick={() => {
          dispatch({
            type: BOOK_TICKET,
            gheDuocChon: ghe
          })
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} text-center`} key={index}>
          {ghe.daDat ? <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : ghe.stt}
        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>
    })
  }

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
            <div>
              {renderSeats()}
            </div>
          </div>

        </div>
        <div className="col-3">
          <h3 className='text-center'>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} đ</h3>
          <hr />
          <h3>{thongTinPhim.tenPhim}</h3>
          <p style={{color:'black', fontWeight:'bold'}}>Địa điểm : {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p style={{color:'black', fontWeight:'bold'}}>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr />
          <div className='row my-5'>
            <div className="col-8 text-success" style={{ fontSize: '1.5rem' }}>
              <span>Ghế : </span>
              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index}> {gheDD.stt}</span>
              })}
            </div>
            <div className="col-4 text-right text-danger" style={{ fontSize: '1.5rem' }}>
              <span>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                return tongTien += ghe.giaVe;
              }, 0).toLocaleString()}đ</span>
            </div>
          </div>
          <hr />
          <div style={{color:'black', fontWeight:'bold'}} className='my-5'>
            <i>Email</i> <br />
            {uLogin.email}
          </div>
          <div style={{color:'black', fontWeight:'bold'}} className='my-5'>
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
