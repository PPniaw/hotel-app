import { React, useEffect, useState, useCallback } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RoomCard from '../../components/RoomCard/RoomCard'
import Wrapper from '../../components/Wrapper/Wrapper'

import { apiGetAllRooms } from '../../api/api.js'

import './Room.css'


export default function Rooms() {

    const [currentRoomsData, setCurrentRoomsData] = useState([])

    const getRoomsData = useCallback(
        () => {
            const gettingRoomsData = async () => {
                try {
                    const response = await apiGetAllRooms();
                    console.log(response)
                    setCurrentRoomsData(response.data.items);
                } catch (e) {
                    console.error(e);
                }

            };
            gettingRoomsData();
        }, [])



    useEffect(() => {
        console.log('useeffect');
        getRoomsData();

    }, [getRoomsData])

    return (
        <div className='background' >
            <Header />
            <Wrapper />
            <Container>
                <Row>
                    <Col className='room-header'>房間種類</Col>
                </Row>
            </Container>
            <Container>
                <Row >
                    {
                        currentRoomsData.map(room => (
                            <RoomCard key={room.id} data={room} />
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </div >
    )
}
