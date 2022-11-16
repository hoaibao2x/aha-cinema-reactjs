
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';
import { Progress } from 'antd';
const { TabPane } = Tabs;



export default function Detail() {

  const [state, setState] = useState({
    tabPosition: 'left'
  });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;




  return (
    <div className='box'>
      <div className='container' style={{ paddingTop: '150px' }}>
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <img src="https://picsum.photos/200/350" alt="123" />
              </div>
              <div className="col-6">
                <p>tên phim</p>
                <p>Mô tả</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <Progress type="circle" percent={75} />
          </div>
        </div>

        <div className='mt-5'>
          <Tabs tabPosition={tabPosition}>
            <div>content</div>
          </Tabs>
        </div>






      </div>
    </div>



  )
}
