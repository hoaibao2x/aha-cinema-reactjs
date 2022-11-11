import React, { Fragment } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Card, Col, Row } from 'antd';
import Carousel from '../../Layout/Carousel/Carousel';



const { Meta } = Card;

export default function Home() {

    return (
        <div >
             <Carousel/>
            <div className='container'>
           
                <Row>
                    <Col className='px-4' span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col className='px-4' span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col className='px-4' span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                    <Col className='px-4' span={6}>
                        <Card
                            hoverable
                            style={{
                                width: '100%',
                            }}
                            cover={<img alt="example" src="https://i.pravatar.cc/?u=-77" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                    </Col>
                </Row>
               
                <HomeMenu/>
            </div>
        </div>
    )
}
