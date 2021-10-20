import React from 'react'
import { Link } from 'react-router-dom';

import { Card, Col } from 'react-bootstrap'

import './RoomCard.css'

export default function RoomCard({ data }) {
    return (
        <Col sm={6}>
            <Link
                className="room-card__link"
                to={{
                    pathname: `/rooms/${data.id}`,
                    state: { roomID: data.id }
                }}
            >
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
            </Link>
        </Col>

    )
}
