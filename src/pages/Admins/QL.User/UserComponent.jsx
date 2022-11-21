import React, { Fragment, useEffect } from 'react'
import { Table } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.css'
import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button } from 'antd/lib/radio';
import { getUserListAction, } from '../../../redux/Admins/action/getListUserAction';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { CapNhatThongTinNguoiDungAction, layDanhSachLoaiNguoiDungAction, TimKiemNguoiDungAction, xoaUserAction } from '../../../redux/Admins/action/QLNDAcition';
import { getFilmList } from '../../../services/Admins/ManagerFilms';
import { useState } from 'react';
// import ApiRFC from '../../../componentHook/DSuser';    

const { Search } = Input;

export default function UserComponent() {
  let { arrUserDefault } = useSelector(state => state.QLNDreducer)

  let dispatch = useDispatch();
  // console.log(arrUserDefault);


  useEffect(() => {
    let action = getUserListAction()
    dispatch(action)
  }, [])


  const columns = [
    // {
    //   "taiKhoan": "adam_test",
    //   "hoTen": "Nam Anh",
    //   "email": "namanh99@gmail.com",
    //   "soDT": "012343212",
    //   "matKhau": "1",
    //   "maLoaiNguoiDung": "QuanTri"
    // },
 

    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',

      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ['descend','ascend'],
      // sortOrder :'descend'

    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
     
      
    },
    {
      title: 'Email',
      dataIndex: 'email',


    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDT',


    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',


    },
    {
      title: 'Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      // render :() => {
      //   return <>
      //       <div className="form-group">
               
      //          <select name='maLoaiNguoiDung' 
      //          onChange={(e)=>{
      //           let idLoai = e.target.value
      //           setmaLoai(idLoai)
                
      //          }}
               
           
      //             className="form-control" >
      //              <option>Hãy Chọn Loại Người Dùng</option>
      //              <option value={'KhachHang'}>Khách Hàng</option>
      //              <option value={'QuanTri'}>Quảng Trị</option>
                   
      //          </select>
           
               
      //      </div>
      //   </>
        
      // }


    },
    {
      title: "Chỉnh Sửa",
      dataIndex: "taiKhoan",
      render: (text, users) => {
        return <>
          <NavLink key={1} className="" to={`/admin/users/edituser/${users.taiKhoan}`}><EditOutlined /> </NavLink>
          <span key={2} className="" onClick={() => {
            if (window.confirm("bạn có chắt muốn xoá dữ liệu này" + users.taiKhoan)) {
              dispatch(xoaUserAction(users.taiKhoan));
            }
          }}><DeleteOutlined /></span>
        </>

      }


    }


  ];

  const data = arrUserDefault;

  const onSearch = value => {
    // console.log(value)
    dispatch(getUserListAction(value))


  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className='container formUser'>

      <h3>Quản Lý Người Dùng</h3>
      <Button className='btn' onClick={() => {
        history.push("/admin/users/adduser")
      }}>Thêm Người Dùng</Button>

      <Search
        className='py-5'
        placeholder="tìm kiếm theo tên người dùng"
        enterButton="Search"
        size="large"

        onSearch={onSearch}
      />
      <Table rowKey={'taiKhoan'} columns={columns} dataSource={data} onChange={onChange} />;
    </div>
  )
}
