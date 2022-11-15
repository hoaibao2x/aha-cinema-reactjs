import React, { Fragment, useEffect} from 'react'
import { Table } from 'antd';
import { NavLink } from 'react-router-dom'

import { AudioOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Button } from 'antd/lib/radio';
import { getUserListAction } from '../../../redux/Admins/action/getListUserAction';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
// import ApiRFC from '../../../componentHook/DSuser';    






const { Search } = Input;

export default function UserComponent() {
  let { arrUserDefault } = useSelector(state => state.QLNDreducer)

  let dispatch = useDispatch();
  // console.log(arrUserDefault);
  

  useEffect(() => {  
    let action  = getUserListAction()
    dispatch(action)
  },[])


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
      title: 'Tài Khoảng',
      dataIndex: 'taiKhoan',
     
      sorter: (a, b) => b.taiKhoan.length - a.taiKhoan.length,
      sortDirections: ['descend','ascend'],
     
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      defaultSortOrder: 'descend',
      sorter: (a, b) => b.hoTen.length - a.hoTen.length,
      sortDirections: ['descend','ascend'],
    },
    {
      title: 'email',
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
      title: 'Mã Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
     
      
    },
    {
      title :"Chỉnh sữa",
      dataIndex : "chinhSua",
      render : ()=>{
        return <>
          <NavLink key={1} className="" to="/admin/users/edituser"><EditOutlined/> </NavLink>
          <NavLink key={2} className="" to="/home"><DeleteOutlined/></NavLink>
        </>

      }


    }
    
    
  ];

  const data = arrUserDefault;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  const onSearch = (value) => console.log(value);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className='container'>
     
      <h3>Quản Lý Người Dùng</h3>
      <Button className='btn' onClick={()=>{
        history.push("/admin/users/adduser")
      }}>Thêm Người Dùng</Button>
      
      <Search 
      className='py-5'
        placeholder="tìm kiếm người dùng"
        enterButton="Search"
        size="large"
       
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />;
    </div>
  )
}
