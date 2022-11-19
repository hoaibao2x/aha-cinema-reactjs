import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styleGhe.css';
import { bookingTicketAction, getDetailTicketAction } from "../../../redux/Users/action/QuanLyDatVeAction";
import { CloseOutlined, UserAddOutlined, CheckOutlined } from '@ant-design/icons';
import { BOOK_TICKET, CHANG_ACTIVE_TABS } from '../../../redux/Users/type/QuanLyDatVeType';
import _ from 'lodash';
import { ThongTinDatVe } from '../../../_core/models/ThongTinDatVe';
import { Tabs } from 'antd';
import { getInfoUserAction } from '../../../redux/Users/action/userAction';
import moment from 'moment';


function Checkout(props) {

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
      let classGheDaDuocDat = '';


      if (uLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = 'gheDaDuocDat';
      }


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
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} text-center`} key={index}>
          {ghe.daDat ? classGheDaDuocDat !== '' ? <UserAddOutlined /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : ghe.stt}
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
            <div className='table'>
              <table>
                <thead >
                  <tr>
                    <th>Ghế chưa đặt</th>
                    <th>Ghế đang đặt</th>
                    <th>Ghế đã đặt</th>
                    <th>Ghế Vip</th>
                    <th>Ghế mình đặt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> <button className='ghe text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDangDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDaDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheVip text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDaDuocDat text-center'><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
        <div className="col-3">
          <h3 className='text-center'>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} đ</h3>
          <hr />
          <h3>{thongTinPhim.tenPhim}</h3>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Địa điểm : {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
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
          <div style={{ color: 'black', fontWeight: 'bold' }} className='my-5'>
            <i>Email</i> <br />
            {uLogin.email}
          </div>
          <div style={{ color: 'black', fontWeight: 'bold' }} className='my-5'>
            <i>Phone</i> <br />
            {uLogin.soDT}
          </div>
          <hr />
          <div className='styleDatve'>
            <div onClick={() => {
              const thongTinDatVe = new ThongTinDatVe();
              thongTinDatVe.maLichChieu = props.match.params.id;
              thongTinDatVe.danhSachVe = danhSachGheDangDat;

              dispatch(bookingTicketAction(thongTinDatVe));
            }} className='clickDatve bg-success text-white'>
              Đặt Vé
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const { TabPane } = Tabs;

function callback(key) {
  console.log(key)
}

export default function CheckoutTab(props) {
  const { tabActice } = useSelector(state => state.QuanLyDatVeReducer);
  const dispatch = useDispatch();
  return <div className='p-4'>
    <Tabs defaultActiveKey="1" activeKey={tabActice} onChange={(key) =>{
      dispatch({
        type:CHANG_ACTIVE_TABS,
        number: key
      })
    }}>
      <Tabs.TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
        <Checkout {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
        <HistoryBooking {...props} />
      </Tabs.TabPane>
    </Tabs>
  </div>
}



function HistoryBooking(props) {
  const dispath = useDispatch();
  const { thongTinNguoiDung } = useSelector(state => state.UserReducers);
  const { uLogin } = useSelector(state => state.UserReducers);
  useEffect(() => {
    let action = getInfoUserAction();
    dispath(action)
  }, []);

  const renderTicketItem = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return <div className="col-4" style={{ marginBottom: '20px' }} key={index}>
        <div className="card" >
          <div className="row">
            <div className="col-3">
              <img style={{ width: '100px', height: '100px', borderRadius: '50%', padding: '10px' }} src={ticket.hinhAnh} alt="" />
            </div>
            <div className="col-9" style={{ paddingTop: '15px' }}>
              <h5 style={{ fontWeight: 'bold', color: 'red' }}>{ticket.tenPhim}</h5>
              <p style={{ fontWeight: 'bold', color: '#000' }}>Ngày chiếu : {moment(ticket.ngayDat).format('hh:mm A')} Giờ Chiếu : {moment(ticket.ngayDat).format('DD-MM-YYYY')} </p>
              <p style={{ fontWeight: 'bold', color: '#000' }}>Địa điểm : {seats.tenHeThongRap}</p>
              <p style={{ fontWeight: 'bold', color: '#000' }}>Tên rạp : {seats.cumRap} - Ghế {ticket.danhSachGhe.slice(0, 6).map((ghe, index) => {
                return <span style={{ fontWeight: 'bold', color: '#000' }} key={index}>[{ghe.tenGhe}] </span>
              })}</p>
            </div>
          </div>
        </div>
      </div>

    })
  }

  return <div className='container-fluid p-5'>
    <h2 style={{ fontSize: '48px', fontWeight: 'bold' }} className='text-center text-primary'>Lịch sử đặt vé khách hàng</h2>
    <div className='row'>
      {renderTicketItem()}
    </div>

  </div>
}

