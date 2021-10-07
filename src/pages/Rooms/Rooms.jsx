import React from 'react'
import { Image, Card, Button, Container, Row, Col } from 'react-bootstrap'

import hotel from './imgs/hotel.png'
import room from './imgs/room.jpg'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import './Room.css'


export default function Rooms() {
    return (
        <div className='background' >
            <Header />
            <Image src={hotel} fluid />
            <Container>
                <Row>
                    <Col className='room-header'>房間種類</Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    123
                                </Card.Title>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={room} />
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}
