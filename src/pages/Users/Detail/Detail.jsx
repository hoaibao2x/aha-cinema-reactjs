
import { Radio, Rate, Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailFilmAction } from '../../../redux/Users/action/GetDetailFilmAction';
import './index.css';
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';







const { TabPane } = Tabs;

export default function Detail(props) {

  const { filmDetail } = useSelector(state => state.QuanLyPhimReducer);
  console.log({ filmDetail })
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    let action = getDetailFilmAction(id)
    dispatch(action)
  }, [])




  const [state, setState] = useState({
    tabPosition: 'left',
  });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;




  return (
    <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, minHeight: "120vh", backgroundSize: 'cover' }}>
      <div className='container' style={{ paddingTop: '150px' }}>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <img style={{ width: '100%', height: '500px', boxShadow: '10px 1px 23px 2px white' }} src={filmDetail.hinhAnh} alt="123" />
              </div>
              <div style={{ marginTop: '20%' }} className="col-6">
                <p style={{ color: '#fff', fontWeight: 'bold' }}>Ngày chiếu : {moment(filmDetail.ngayKhoiChieu).format('DD . MM . YYYY')}</p>
                <h3 style={{ color: '#fff' }}>{filmDetail.tenPhim}</h3>
                <p style={{ color: '#fff', fontWeight: 'bold' }}>
                  {filmDetail.moTa?.length > 100 ? <span>{filmDetail.moTa.slice(0, 100)}...</span> : <span>{filmDetail.moTa}</span>}
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <span className="dot">
              {filmDetail.danhGia * 10}%
            </span>
            <br />
            <div style={{ marginLeft: '23%', marginTop: '20px', fontSize: '30px' }}>
              <Rate allowHalf value={filmDetail.danhGia / 2} />
              <br />
            </div>
            <div style={{ marginLeft: '28%', fontSize: '24px', color: '#fff', fontWeight: 'bold' }}>
              Đánh giá
            </div>
          </div>
        </div>


        <div className='mt-5'>
          <Tabs style={{ background: 'white', minHeight: '300px' }} defaultActiveKey="1">
            <Tabs.TabPane tab="Lịch Chiếu" key="1">
              <div>
                <Tabs tabPosition={tabPosition}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return <TabPane tab={<div>
                      <img style={{ width: 50, height: 50 }} src={htr.logo} alt={htr.logo} />
                      {htr.tenHeThongRap}
                    </div>} key={index}>
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return <div key={index}>
                          <div style={{ display: 'flex' }}>
                            <img style={{ width: 50, height: 50 }} src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" alt="" />
                            <div className='ml-2'>
                              {cumRap.tenCumRap}
                              <br />
                              {cumRap.diaChi}
                            </div>
                          </div>
                          <div className='row mt-2 text-danger'>
                            {cumRap.lichChieuPhim?.slice(0,6).map((lichChieu, index) => {
                              return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} className="col-4" key={index}>
                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                              </NavLink>
                            })}
                          </div>

                        </div>


                      })}
                    </TabPane>
                  })}
                </Tabs>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Thông tin" key="2">
              Thông tin
            </Tabs.TabPane>
            <Tabs.TabPane tab="Đánh giá" key="3">
              Đánh giá
            </Tabs.TabPane>
          </Tabs>
        </div>





      </div>
    </div >



  )
}
