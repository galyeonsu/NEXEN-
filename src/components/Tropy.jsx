import { useState } from 'react';
import { vData6 } from '../data.js'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Tropy() {
    const [myData6, setMyData6] = useState(vData6);
    return (
        <div className='dtropy'>
            <div className='tropy'>
                <div >
                    <div className>
                        <Row xs={1} md={3} className='g-5'>
                            {myData6.map((item, i) => (
                                <Col key={i} >
                                    <div style={{}}>
                                                {i === 0 && <FaFacebookSquare />}
                                                {i === 1 && <FaInstagram />}
                                                {i === 2 && <IoLogoYoutube />
                                                }{item.iconName}
                                        <Card.Text>   
                                                </Card.Text>
                                                </div>
                                        <Card.Img variant="top" src={`../img/${item.img}`} />
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text><small> {item.description}</small></Card.Text>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tropy;