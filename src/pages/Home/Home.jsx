import React, { Fragment, useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'

import CarouselHome from '../../Layout/Carousel/CarouselHome';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmListAction } from '../../redux/actions/GetFilmListAction';
import "../Home/index.css";
import MultipleRows from "../../Layout/Carousel/SlickCarousel/MuntipleRowSlick"




export default function Home(props) {

    const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        let action = getFilmListAction();
        dispatch(action)
    }, [])


    return (
        <div style={{ backgroundColor: "#111111" }}>
            <CarouselHome />
           
            <div style={{marginTop:"100px"}} className='container'>
                <MultipleRows  arrFilm={arrFilm}/>
                <HomeMenu />
            </div>
        </div>
    )
}
