import React, { Component } from "react";
import Slider from "react-slick";
import "./index.css";

import { Card, Col, Row } from 'antd';

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




export default class FilmList extends Component {

    renderFilm = () => {
        return this.props.arrFilm.map((film, index) => {
            return <Col className='styleCol px-4 py-3' key={index}>
            <Card className='styleCard'
                hoverable
                style={{
                    width: '100%',
                    height: '400px'
                }}
                cover={<img style={{ height: '300px' }} className='img-fluid'
                    alt="example" src=
                    {film.hinhAnh} />}>

                <Meta title={film.tenPhim} description={film.moTa.length > 30 ?
                    <span>{film.moTa.slice(0, 30)}</span> : <span>{film.moTa}</span>} />
            </Card>
        </Col>
    })
    }




    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "20px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <Slider {...settings}>
                        {this.renderFilm()}
                </Slider>
            </div>
        );
    }
}