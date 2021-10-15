import { React, useEffect, useState, useCallback } from 'react'
import { Image, Card, Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

import hotel from './imgs/hotel.png'
// import room from './imgs/room.jpg'


import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RoomCard from '../../components/RoomCard/RoomCard'
import { apiGetAllRooms } from '../../api/api.js'


import './Room.css'


export default function Rooms() {

    const [currentRoomsData, setCurrentRoomsData] = useState({
        roomsData: [1, 2, 3],
        dataIsFetched: false,
    })



    const getData = () => {
        axios.get(
            'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms?', {
            headers: {
                'authorization': 'Bearer OxWgaH3NXZ1iDLoRmm3YZAE1zIkSg142asehhYYpw2Eh3LpVLFbyo6gkhmTA'
            },
        })
            .then(res => {
                console.log(res)
                const roomsData = res.data.items

                setCurrentRoomsData({

                    roomsData: roomsData,
                })
            })
            .catch(err => console.log(err))
    };

    // const getRoomsData = useCallback(
    //     () => {
    //         const gettingRoomsData = async () => {
    //             try {
    //                 const response = await apiGetAllRooms();
    //                 setCurrentRoomsData({ roomsData: response.data.items });
    //             } catch (e) {
    //                 console.error(e);
    //             }
    //             setCurrentRoomsData({ dataIsFetched: true });
    //         };

    //         gettingRoomsData();
    //     },
    //     [],
    // )


    // const getRoomsData = async () => {
    //     try {
    //         const response = await apiGetAllRooms();
    //         setCurrentRoomsData({ roomsData: response.data.items });
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     setCurrentRoomsData({ dataIsFetched: true });
    // };

    useEffect(() => {
        console.log('useeffect');
        getData();
        test();
        // getRoomsData();

    }, [])


    const test = () => {
        console.log(currentRoomsData.roomsData)
        console.log(currentRoomsData.singleDayPrice)
        console.log(currentRoomsData.dataIsFetched)
    }


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
                <Row >
                    {
                        currentRoomsData.roomsData.map(room => (
                            <RoomCard key={room.id} data={room} />
                        ))
                    }
                </Row>
            </Container>
            <Footer />
        </div >
    )
}
