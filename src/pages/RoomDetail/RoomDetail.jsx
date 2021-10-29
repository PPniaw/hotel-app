import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Wrapper from '../../components/Wrapper/Wrapper'
import DetailNav from '../../components/DetailNav/DetailNav'
import RoomDetailCard from '../../components/RoomDeatilCard/RoomDetailCard'

import './RoomDetail.css'


export default function RoomDetail(props) {
    const [roomID, setroomID] = useState(props.location.state.roomID)

    useEffect(() => {
        console.log(props)
        setroomID(props.location.state.roomID)
    }, [props])

    return (
        <div>
            <Header />
            <Wrapper />
            <Container fluid>
                <Row className='room-detail-row'>
                    <Col  md={3} className='room-detail-nav-title'>Room Type</Col>
                    <Col  md={9} className='room-detail-nav'>
                        <DetailNav state={roomID} />
                    </Col>
                </Row>
            </Container>
            <RoomDetailCard
                className='room-detail-card'
                roomID={roomID}
            />

            <Footer />
        </div>
    )
}
