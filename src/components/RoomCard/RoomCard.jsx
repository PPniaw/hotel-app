import {Card, Col } from 'react-bootstrap'
import React from 'react'

import './Room.css'

export default function RoomCard({data}) {
    return (
        
            <Col sm={6}>
                <Card className='room-card'>
                    <Card.Img variant="bottom" src={data.imageUrl} className='room-card-img' />
                    <Card.ImgOverlay>
                        <Card.Body className='room-card-body'>
                            <span className='room-span'>{data.name}</span>
                            <Card.Text className='room-card-text'>
                                平日 : ${data.normalDayPrice} 假日 : ${data.holidayPrice}
                            </Card.Text>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        
    )
}
