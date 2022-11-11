import React from 'react';
import {useSelector} from 'react-redux';
import '../HeaderHome/index.css';


const styleBanner  ={
  height:'800px',
  color:'#fff',
  lineHeight:'160px',
  textAlign:'center',
  backgroundPosition:'center',
  backgroundSize:'100%',
  backgroundRepeat:'no-repeat'
}


export default function Carousel(props) {

  const {bannerList} = useSelector((state) =>  state.CarouselReducer);

  const renderBanner = () => {
    return bannerList.map((item,index) => { 
      return <div key={index}>
        <div style={{...styleBanner,backgroundImage:`url(${item.hinhAnh})`}}>
          <img style={{opacity:0}} src={item.hinhAnh} className='img-fluid' alt={item.hinhAnh} />
        </div>
      </div>
     })
  } 
   

  return (
    <div>
      {renderBanner()}
    </div>
  )
}
