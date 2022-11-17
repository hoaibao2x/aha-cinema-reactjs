import React, { Fragment, useState } from 'react';
import { Tabs } from 'antd';

import { NavLink } from 'react-router-dom';
import moment from 'moment';




const { TabPane } = Tabs;




export default function HomeMenu(props) {


  const [state, setState] = useState({
    tabPosition: 'left'
  });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;

  const renderSystemsCinema = () => {
    return props.arrSystemsCinema.map((item, index) => {
    
      return <TabPane tab={
        <Fragment>
          <img src={item.logo} alt="" style={{ width: '50px' }} />
          <hr />
        </Fragment>

      } key={index} >

        <Tabs tabPosition={tabPosition}>
          {item.lstCumRap?.slice(0, 5).map((cinema, index) => {
            return <TabPane tab={
              <Fragment>
                <div style={{ width: "320px", display: "flex" }}>
                  <img src={cinema.hinhAnh} alt="" style={{ width: '50px' }} />
                  <div className='text-left ml-2'>
                    {cinema.tenCumRap}
                    <br />
                    {cinema.diaChi.length > 35 ? <span>{cinema.diaChi.slice(0, 35)} ...</span> : <span>
                      {cinema.diaChi}</span>}
                  </div>
                </div>
                <hr />
              </Fragment>
            } key={index}>
              {cinema.danhSachPhim?.slice(0, 4).map((film, index) => {
                return <Fragment key={index}>
                  <div style={{ display: "flex" }}>
                    <img style={{ width: 75, height: 75 }} src={film.hinhAnh} alt={film.tenPhim} onError={(e) => {
                      e.target.onerror = null; e.target.src = "http://picsum.photos/75/75"
                    }} />
                    <div className='ml-2'>
                      <h3 className='text-primary'>{film.tenPhim}</h3>
                      <p style={{ color: "#000", fontWeight: "600" }}>{cinema.diaChi}</p>

                      <div className='ml-3'>
                        {film.lstLichChieuTheoPhim?.slice(0, 5).map((timeShow, index) => {
                          return <NavLink style={{ fontSize: "18px", color: "" }} className="mr-2 text-success" to="/" key={index}>
                            {moment(timeShow.ngayChieuGioChieu).format('hh:mm A')}
                          </NavLink>
                        })}
                      </div>

                    </div>
                  </div>

                  <hr />
                </Fragment>
              })}
            </TabPane>
          })}

        </Tabs>
      </TabPane>

    })
  }



  return (
    <div style={{ marginTop: "70px" }} className='container'>
      <div style={{ height: "30px" }} id="cumrap"></div>
      <div className='mt-5'>
        <Tabs tabPosition={tabPosition}>
          {renderSystemsCinema()}
        </Tabs>
      </div>

    </div>
  )
};



