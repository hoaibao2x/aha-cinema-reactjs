import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import '../HeaderHome/index.css';
import { useEffect } from 'react';
import { getCarouselAction } from '../../redux/Users/action/CarouselAction';




const contentStyle = {
  height: '750px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}


export default function CarouselHome(props) {

  const { bannerList } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch()

  useEffect(() => {
    let action = getCarouselAction();
    dispatch(action)
  }, [])





  const renderBanner = () => {
    return bannerList.map((item, index) => {
      return <div key={index}>
        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
          <img style={{ opacity: 0, marginTop: '70px' }} src={item.hinhAnh} className='img-fluid' alt={item.hinhAnh} />
        </div>

      </div>
    })
  }



  return (
    <Carousel effect='fade'>
      {renderBanner()}
    </Carousel>






  )
}
