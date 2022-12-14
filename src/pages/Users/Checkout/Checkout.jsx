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
import { history } from '../../../App';

function Checkout(props) {

  const { uLogin } = useSelector(state => state.UserReducers);
  const { detailTicket, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);
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
        }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}`} key={index}>
          {ghe.daDat ? classGheDaDuocDat !== '' ? <UserAddOutlined /> : <CloseOutlined style={{ fontWeight: 'bold' }} /> : ghe.stt}
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
              <h3 className='mt-2 text-black'>M??n h??nh</h3>
            </div>
            <div>
              {renderSeats()}
            </div>
            <div className='table'>
              <table>
                <thead >
                  <tr className='tr'>
                    <th className='th'>Gh??? ch??a ?????t</th>
                    <th className='th'>Gh??? ??ang ?????t</th>
                    <th className='th'>Gh??? ???? ?????t</th>
                    <th className='th'>Gh??? Vip</th>
                    <th className='th'>Gh??? m??nh ?????t</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> <button className='ghe text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDangDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDaDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheVip text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button></td>
                    <td> <button className='ghe gheDaDuocDat text-center'><CheckOutlined style={{ fontWeight: 'bold' }} /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h3 className='text-center'>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.giaVe;
          }, 0).toLocaleString()} ??</h3>
          <hr />
          <h3>{thongTinPhim.tenPhim}</h3>
          <p style={{ color: 'black', fontWeight: 'bold' }}>?????a ??i???m : {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
          <p style={{ color: 'black', fontWeight: 'bold' }}>Ng??y chi???u: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</p>
          <hr />
          <div className='row my-5'>
            <div className="col-8 text-success">
              <span>Gh??? : </span>
              {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                return <span key={index}> {gheDD.stt}</span>
              })}
            </div>
            <div className="col-4 text-right text-danger">
              <span>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                return tongTien += ghe.giaVe;
              }, 0).toLocaleString()}??</span>
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
              ?????t V??
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
  const { uLogin } = useSelector(state => state.UserReducers)

  const operations = <Fragment>
    {!_.isEmpty(uLogin) ? <button className='btn btn-success' onClick={() => {
      history.push('/')
    }}>Xin ch??o {uLogin.taiKhoan}</button> : ''}
  </Fragment>

  return <div className='p-4'>
    <Tabs tabBarExtraContent={operations} defaultActiveKey="1" activeKey={tabActice} onChange={(key) => {
      dispatch({
        type: CHANG_ACTIVE_TABS,
        number: key
      })
    }}>
      <Tabs.TabPane tab="01 CH???N GH??? & THANH TO??N" key="1">
        <Checkout {...props} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="02 K???T QU??? ?????T V??" key="2">
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
      return <div className="col-12 col-sm-12 col-sm-6 col-md-6 col-xl-4" style={{ marginBottom: '20px' }} key={index}>
        <div className="card" >
          <div className="row">
            <div className="col-3">
              <img style={{ width: '100px', height: '100px', borderRadius: '50%', padding: '10px' }} src={ticket.hinhAnh} alt="" />
            </div>
            <div className="col-9" style={{ paddingTop: '15px' }}>
              <h5 style={{ fontWeight: 'bold', color: 'red' }}>{ticket.tenPhim}</h5>
              <p style={{ fontWeight: 'bold', color: '#000' }}>Ng??y chi???u : {moment(ticket.ngayDat).format('hh:mm A')} Gi??? Chi???u : {moment(ticket.ngayDat).format('DD-MM-YYYY')} </p>
              <p style={{ fontWeight: 'bold', color: '#000' }}>?????a ??i???m : {seats.tenHeThongRap}</p>
              <p style={{ fontWeight: 'bold', color: '#000' }}>T??n r???p : {seats.cumRap} - Gh??? {ticket.danhSachGhe.slice(0, 6).map((ghe, index) => {
                return <span style={{ fontWeight: 'bold', color: '#000' }} key={index}>[{ghe.tenGhe}] </span>
              })}</p>
            </div>
          </div>
        </div>
      </div>

    })
  }

  return <div className='container-fluid p-5'>
    <h2 style={{ fontSize: '48px', fontWeight: 'bold' }} className='text-center text-primary'>L???ch s??? ?????t v?? kh??ch h??ng</h2>
    <div className='row'>
      {renderTicketItem()}
    </div>

  </div>
}

