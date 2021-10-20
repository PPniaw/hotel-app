import React, { Component } from 'react'
import {Navbar,Nav,Container,Image} from "react-bootstrap";

import logo from './imgs/logo.png'



export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/" >
                        <Image src={logo} width='45px' style={{ margin: '0px 10px' }} />
                        GoodDay Hotel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/meal">Meal</Nav.Link>
                            <Nav.Link href="/rooms">Rooms</Nav.Link>
                            <Nav.Link href="/connect">Connect Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
};
