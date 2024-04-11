import { useState } from 'react';
import {vData5 } from '../data.js'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
function Service() {
  const [myData5, setMyData5] = useState(vData5);
  return (
    <div className='t-Service'>
    <div className='Service'>
    <div >
      <div >
        <Row xs={2} md={3} className='g-0'>
          {myData5.map((item, i) => (
            <Col key={i}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Card.Img variant="top" src={`../img/${item.img}`} />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    </div>
    </div>
  );
}


export default Service;