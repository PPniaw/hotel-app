import { React, useCallback, useEffect, useState } from 'react'

import { Carousel } from 'react-bootstrap'


import { apiGetSingleRoom } from '../../api/api.js'

import './RoomDetailCard.css'


export default function RoomDeatilCard(props) {
    const roomID = props.roomID

    const [img, setImg] = useState([])
    const [roomName, setRoomName] = useState()

    const getData = useCallback(
        () => {
            const gettingData = async () => {
                try {
                    const response = await apiGetSingleRoom(roomID);
                    console.log(response)
                    setImg(response.data.room[0].imageUrl);
                    setRoomName(response.data.room[0].name)
                } catch (e) {
                    console.error(e);
                }
            }
            gettingData();
        },
        [roomID],
    )



    useEffect(() => {
        getData();
    }, [getData])

    return (
        <div className="col-md-8" style={{ margin: '0 auto' }}>
            <div className="detail-room-name">
                {roomName}
            </div>
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
        </div>
    )
}
