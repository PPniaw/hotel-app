import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Facebook } from 'react-bootstrap-icons';


export default function Footer() {
    return (
        <div>
            <Card style={{ textAlign: 'center', backgroundColor: 'black' }}>
                <Card.Footer style={{ color: 'white' }}>
                    <Container>
                        <Row>
                            <Col sm={3}>歡迎聯絡客服</Col>
                            <Col sm={3}>電話 : (02)-24xx-12xx</Col>
                            <Col sm={3}>信箱 : GoodDayHotel@xxxxx.com</Col>
                            <Col sm={3}><Facebook/></Col>
                        </Row>
                        
                    </Container>
                    
                </Card.Footer>
            </Card>
        </div>
    )
}
