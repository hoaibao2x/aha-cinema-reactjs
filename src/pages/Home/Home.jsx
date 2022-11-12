import React, { Fragment, useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Card, Col, Row } from 'antd';
import CarouselHome from '../../Layout/Carousel/CarouselHome';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmListAction } from '../../redux/actions/GetFilmListAction';
import "../Home/index.css";



const { Meta } = Card;

export default function Home(props) {

    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        let action = getFilmListAction();
        dispatch(action)
    }, [])


    const renderPhim = () => {
        return arrFilm.map((phim, index) => {
            return  <Col className='styleCol px-4 py-3' span={6} key={index}>
            <Card className='styleCard'
                hoverable
                style={{
                    width: '100%',
                    height: '400px'
                }}
                cover={<img style={{height:'300px'}} className='img-fluid' alt="example" src={phim.hinhAnh} />}
            >
                <Meta  title={phim.tenPhim} description={phim.danhGia}   />
            </Card>
        </Col>
        })
    }



    return (
        <div style={{ backgroundColor: "#111111" }}>

            <CarouselHome />
            <div className='container'>

            
             
               <Row style={{marginTop:"150px"}} >
                     {renderPhim()}
                </Row>
                   
                

                <HomeMenu />
            </div>
        </div>
    )
}
