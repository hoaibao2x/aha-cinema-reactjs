import React, { useState } from 'react';
import { Tabs } from 'antd';


const { TabPane } = Tabs;




export default function HomeMenu(props) {
  const [state, setState] = useState({
    tabPosition: 'left'
  });
  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };
  const { tabPosition } = state;

  return (
    <div className='container'>

        <Tabs
          tabPosition={tabPosition}>
              <TabPane  tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png' alt='' style={{width:'50px'}}></img>} key='1'>
                  Content of tab 1
              </TabPane>
              <TabPane tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png' alt='' style={{width:'50px'}}></img>} key='2'>
                  Content of tab 2
              </TabPane>
              <TabPane tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png' alt='' style={{width:'50px'}}></img>} key='3'>
                  Content of tab 3
              </TabPane>
              <TabPane tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png' alt='' style={{width:'50px'}}></img>} key='4'>
                  Content of tab 4
              </TabPane>
              <TabPane tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png' alt='' style={{width:'50px'}}></img>} key='5'>
                  Content of tab 5
              </TabPane>
              <TabPane tab={<img src='http://movie0706.cybersoft.edu.vn/hinhanh/megags.png' alt='' style={{width:'50px'}}></img>} key='6'>
                  Content of tab 6
              </TabPane>
          </Tabs>

        
      




    </div>
  )
};



