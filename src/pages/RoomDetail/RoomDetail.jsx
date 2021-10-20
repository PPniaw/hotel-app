import { React, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Wrapper from '../../components/Wrapper/Wrapper'
import DetailNav from '../../components/DetailNav/DetailNav'
import RoomDetailCard from '../../components/RoomDeatilCard/RoomDetailCard'


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
            <Container>
                <Row>
                    <Col className='room-header'>Room Type</Col>
                </Row>
            </Container>
                <DetailNav state={roomID}/>
                <RoomDetailCard
                    className='room-detail-card'
                    roomID={roomID}
                />

            <Footer />
        </div>
    )
}
