import { BackTop } from 'antd';
import React from 'react';
import {
  UpOutlined
} from '@ant-design/icons';

const style = {
  height: 50,
  width: 50,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 25,
};
const BackToTop = () => (

  <BackTop>
    <div style={style}><UpOutlined /></div>
  </BackTop>

);

export default BackToTop;