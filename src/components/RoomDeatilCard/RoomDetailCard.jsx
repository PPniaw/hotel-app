import { React, useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap'
import { BsFillPersonFill, BsWifi,BsArrowRight } from 'react-icons/bs';
import { FaBath } from 'react-icons/fa';
import { IoIosBed } from 'react-icons/io';
import { IoResizeSharp } from 'react-icons/io5';
import { GiMeal, GiSofa } from 'react-icons/gi';
import { MdLocalBar, MdRoomService, MdOutlineAir, MdSmokeFree, MdChildFriendly, MdPets } from 'react-icons/md';
import { CgScreen, CgSmartHomeRefrigerator } from 'react-icons/cg';

import BookingModal from '../BookingModal/BookingModal'

import { apiGetSingleRoom } from '../../api/api.js'

import './RoomDetailCard.css'


export default function RoomDeatilCard(props) {
    const roomID = props.roomID

    const [img, setImg] = useState([])
    const [roomData, setRoomData] = useState({
        roomName: '',
        bed: '',
        des: '',
        guest: '',
        footage: '',
        checkInEarly: '',
        checkInLate: '',
        checkOut: '',
        normalDayPrice: '',
        holidayPrice: '',

    })
    const [amenities, setAmenities] = useState({
        // "Wi-Fi": false,
        // "Breakfast": true,
        // "Mini-Bar": false,
        // "Room-Service": false,
        // "Television": true,
        // "Air-Conditioner": true,
        // "Refrigerator": true,
        // "Sofa": false,
        // "Great-View": false,
        // "Smoke-Free": true,
        // "Child-Friendly": false,
        // "Pet-Friendly": true
    })

    const [modalShow, setModalShow] = useState(false);


    const getData = useCallback(
        () => {
            const gettingData = async () => {
                try {
                    const response = await apiGetSingleRoom(roomID);
                    const data = response.data.room[0]
                    console.log(response)
                    setImg(data.imageUrl);
                    setRoomData({
                        roomName: data.name,
                        des: data.description,
                        bed: data.descriptionShort.Bed[0],
                        guest: data.descriptionShort.GuestMax,
                        footage: data.descriptionShort.Footage,
                        checkInEarly: data.checkInAndOut.checkInEarly,
                        checkInLate: data.checkInAndOut.checkInLate,
                        checkOut: data.checkInAndOut.checkOut,
                        normalDayPrice: data.normalDayPrice,
                        holidayPrice: data.holidayPrice,
                    })
                    // const amenities = data.amenities
                    setAmenities(
                        data.amenities
                    )
                } catch (e) {
                    console.error(e);
                }
            }
            gettingData();
        },
        [roomID,],
    )

    useEffect(() => {
        getData();
    }, [getData])

    return (

        <Container fluid>
            <Container>
                <Row>
                    <Col className='room-detail-header'>{roomData.roomName}</Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className='room-detail-row'>
                    <Col sm={6} >
                        <Carousel  >
                            {
                                img.map(img => (
                                    <Carousel.Item >
                                        <img
                                            className="d-block detail-card-img"
                                            src={img}
                                            alt="First slide"

                                        />

                                    </Carousel.Item>

                                ))
                            }
                        </Carousel>
                    </Col>
                    <Col sm={6} className='room-detail-des'>
                        <div>
                            <span className='room-detail-icons'>
                                <BsFillPersonFill /> {roomData.guest}
                            </span>
                            <span className='room-detail-icons'>
                                <FaBath /> Private-Bath
                            </span>
                            <span className='room-detail-icons'>
                                <IoIosBed /> {roomData.bed}
                            </span>
                            <span className='room-detail-icons'>
                                <IoResizeSharp /> {roomData.footage}㎡
                            </span>
                        </div>
                        <br />
                        <div>

                            {roomData.des}
                        </div>
                        <br />
                        <div>
                            <span className='room-detail-checkIn'>
                                CheckIn&nbsp;:&nbsp;{roomData.checkInEarly}~{roomData.checkInLate}
                            </span>
                            <span className='room-detail-checkIn'>
                                Check&nbsp;Out&nbsp;:&nbsp;{roomData.checkOut}
                            </span>
                        </div>
                        <div>
                            <span className='room-detail-checkIn'>
                                NormalDayPrice&nbsp;:&nbsp;${roomData.normalDayPrice}
                            </span>
                            <span className='room-detail-checkIn'>
                                HolidayPrice&nbsp;:&nbsp;${roomData.holidayPrice}
                            </span>
                        </div>
                        <br />

                        <div>
                            <Button variant="success" onClick={() => setModalShow(true)} className='room-detail-button'>
                                BOOK NOW <BsArrowRight style={{marginBottom:'5px',marginLeft:'10px'}}/>
                            </Button>

                            <BookingModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                data={roomData}
                                roomID={roomID}
                            />
                        </div>

                        <br />
                        <br />

                        <span style={{ textDecoration: !amenities['Wi-Fi'] ? 'line-through' : null, display: 'inline-block' }}>
                            <BsWifi />Wi-Fi
                        </span>
                        <span style={{ textDecoration: !amenities['Breakfast'] ? 'line-through' : null, display: 'inline-block' }}>
                            <GiMeal />Breakfast
                        </span>
                        <span style={{ textDecoration: !amenities['Mini-Bar'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdLocalBar />Mini&nbsp;Bar
                        </span>
                        <span style={{ textDecoration: !amenities['Room-Service'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdRoomService />Room&nbsp;Service
                        </span>
                        <span style={{ textDecoration: !amenities['Television'] ? 'line-through' : null, display: 'inline-block' }}>
                            <CgScreen />Television
                        </span>
                        <span style={{ textDecoration: !amenities['Air-Conditioner'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdOutlineAir />Air&nbsp;Conditioner
                        </span>
                        <span style={{ textDecoration: !amenities['Refrigerator'] ? 'line-through' : null, display: 'inline-block' }}>
                            <CgSmartHomeRefrigerator />Refrigerator
                        </span>
                        <span style={{ textDecoration: !amenities['Sofa'] ? 'line-through' : null, display: 'inline-block' }}>
                            <GiSofa />Sofa
                        </span>
                        <span style={{ textDecoration: !amenities['Great-View'] ? 'line-through' : null, display: 'inline-block' }}>
                            <GiSofa />Great&nbsp;View
                        </span>
                        <span style={{ textDecoration: !amenities['Smoke-Free'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdSmokeFree />Smoke&nbsp;Free
                        </span>
                        <span style={{ textDecoration: !amenities['Child-Friendly'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdChildFriendly />Child&nbsp;Friendly
                        </span>
                        <span style={{ textDecoration: !amenities['Pet-Friendly'] ? 'line-through' : null, display: 'inline-block' }}>
                            <MdPets />Pet&nbsp;Friendly
                        </span>


                    </Col>
                </Row>
            </Container>
        </Container >
    )
}
