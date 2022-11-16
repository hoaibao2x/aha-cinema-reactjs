import React from 'react'
import { Redirect } from 'react-router-dom';
import adminBackground from '../../assets/Admins/imgs/4859197.jpg'

function AdminPage() {

    

  return (
    <div className='container'>
        <img className='w-75 mx-auto d-block' src={adminBackground} alt="" />
    </div>
  )
}

export default AdminPage