import React, { Fragment, useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Card, Col, Row } from 'antd';
import CarouselHome from '../../../Layout/Carousel/CarouselHome';
import { useSelector, useDispatch } from 'react-redux';
import { getFilmListAction } from '../../../redux/Users/action/GetFilmListAction';
import FilmList from '../../../Layout/FilmList/FilmList';



const { Meta } = Card;

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
            <div className='container'>
                <FilmList arrFilm={arrFilm}/>
                <HomeMenu />
            </div>
        </div>
    )
}
