import React, { Component } from 'react'
import { Image, Card, Carousel } from 'react-bootstrap'

import hotel from './imgs/hotel.png'
import pool from './imgs/pool.jpg'
import room from './imgs/room.jpg'
import meal from './imgs/meal.jpg'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Image src={hotel} fluid />
                <div>
                    <Card className="text-center">
                        <Card.Header style={{ color: 'red', fontSize: '40px', fontWeight: 'bold' }}>
                            
                                <hr style={{ opacity: '1', color: 'red', height: '5px', width: '20%', display: 'inline-block', margin: 'auto', verticalAlign: 'middle' }} />
                                最新消息
                                <hr style={{ opacity: '1', color: 'red', height: '5px', width: '20%', display: 'inline-block', margin: 'auto', verticalAlign: 'middle' }} />
                            

                        </Card.Header>
                        <Card.Body>
                            <Card.Title style={{ color: 'red', fontSize: '25px', fontWeight: 'bold' }}>慶祝開張 訂房全面85折</Card.Title>
                            <Card.Text className="col-md-6" style={{margin:'auto'}}>
                                感謝您對GoodDay飯店長期以來的支持與愛護，來住宿就可享有85折優惠，還有精緻餐點提供。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="col-md-6" style={{ margin: 'auto' }}>
                        <Carousel  >
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={meal}
                                    alt="First slide"
                                    
                                />
                                <Carousel.Caption >
                                    <h3>精緻美食</h3>
                                    <p>提供精緻的西式套餐，各種頂級的牛排，歐式法式的甜點，滿足您對美食的無限想像。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={room}
                                    alt="Second slide"
                                />

                                <Carousel.Caption >
                                    <h3>舒適住房</h3>
                                    <p>溫馨的小沙發椅，電視及冰箱，溫暖的床舖，窗外美麗的風景。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={pool}
                                    alt="Third slide"
                                />

                                <Carousel.Caption >
                                    <h3>泳池設施</h3>
                                    <p>整潔的泳池設施，絕對是逃離這炎熱夏日的最佳去處。</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <Footer />
                </div>
            </div >
        )
    }
};
