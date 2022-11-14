import React from "react";
import Slider from "react-slick";
import "./index.css";

import { Card, Col } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { SET_FILM_SHOWING, SET_FILM_COMING_SOON } from "../../redux/Users/type/QuanLyPhimType";

const { Meta } = Card;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}




const FilmList = (props) => {

    const dispath = useDispatch();
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)

    const renderFilm = () => {
        return props.arrFilm.slice(0, 18).map((film, index) => {
            return <Col className='styleCol px-4 py-3' key={index}>
                <Card className='styleCard'
                    hoverable
                    style={{
                        width: '100%',
                        height: '350px'
                    }}
                    cover={<img style={{ height: '280px' }} className='img-fluid'
                        alt="example" src=
                        {film.hinhAnh} />}>

                    <Meta title={film.tenPhim}/>
                    <button className="btn btn-danger btnDatve">Đặt Vé</button>
                </Card>
            </Col>
        })
    }
    let activeFilmDC = dangChieu === true ? 'classActiveFilm' : 'noneActiveFilm';
    let activeFilmSC = sapChieu === true ? 'classActiveFilm' : 'noneActiveFilm';
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 4,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div style={{marginTop:"100px"}}>
            <button className={`${activeFilmDC} `} style={{ padding: "10px", marginRight: "10px", borderRadius: "5px", backgroundColor: "red", color: "white", fontWeight: "700" }} onClick={() => {
                const action = {
                    type: SET_FILM_SHOWING
                }
                dispath(action)
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${activeFilmSC}`} style={{ padding: "10px", borderRadius: "5px", backgroundColor: "white", color: "red", fontWeight: "700" }} onClick={() => {
                const action = {
                    type: SET_FILM_COMING_SOON
                }
                dispath(action)
            }}>PHIM SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderFilm()}
            </Slider>
        </div>
    );
}

export default FilmList



