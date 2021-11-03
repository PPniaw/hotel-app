import { React, useEffect, useState, useCallback } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import { apiGetAllRooms } from '../../api/api.js'

import './DetailNav.css'

export default function DetailNav(props) {
    const [currentRoomsData, setCurrentRoomsData] = useState([])
    const [roomID, setroomID] = useState(props.state)


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
        console.log(props)
        setroomID(props.state)

    }, [getRoomsData, props,roomID])




    return (
        
        <Nav fill className="detail-nav" >
            
            {
                currentRoomsData.map(room => (
                    <Nav.Item className="detail-nav-item" key={room.id}>
                        {/* <Nav.Link href="/home">Active</Nav.Link> */}
                        <Link
                            className='detail-link'
                            to={{
                                pathname: `/rooms/${room.id}`,
                                state: { roomID: room.id },
                            }}
                            // key={room.id}
                            style={{ color: roomID === room.id ? 'orange' : null }}
                        >
                            {room.name}
                        </Link>
                    </Nav.Item>
                ))
            }

        </Nav>
    )
}
