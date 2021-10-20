import React from 'react'
import { Image} from 'react-bootstrap'


import hotel from './imgs/hotel.png'

export default function Wrapper() {
    return (
        <Image src={hotel} fluid />
    )
}
