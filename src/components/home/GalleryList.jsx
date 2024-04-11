import { useState } from 'react';
import { vData,vData2 } from '../../data.js'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../../App.css';
function GalleryList() {
  const [myData, setMyData] = useState(vData);
  const [myData2, setMyData2] = useState(vData2);
  return (
    <div className='produt'>
      <div className='d-product mb-2 mb-md-5'>
        <div className=' py-5'>
          <div className='mb-3'>
            <h1>Product</h1>
            <span>넥센타이어의 다양한 제품을 확인해 보세요</span>
          </div>
        </div>
        <Row>
          {myData.map((item, i) => (
            <Col sm={6} md={3} className='mb-2' key={i}>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Card.Img variant="top" src={`../img/${item.img}`} />
              </div>
            </Col>
          ))} 
        </Row>
      </div>
      
    <div>
    <div className='d-product'>
        <h1>Why NEXEN TIRE</h1>
        <span className="slogan">우수한 기술력과 노하우를 바탕으로 세계적으로 인정받고 있는 넥센타이어를 확인해 보세요</span>
      </div>
      <div className='d-product'>
    <Row className='py-5'>
    {myData2.map((item, i) => (
            <Col xs = {12}md={4}  className='mb-2 d-flex justify-content-center' key={i}>
              <div  style={{display:"flex", justifyContent:"space-around"}}>
                <div className='sproduct'>
              <Card.Img variant="top" src={`../img/${item.img}`} />
              </div>
              </div>
              </Col>
                 ))}
    </Row>
    </div>
    </div>
    </div>
    
  );
}

export default GalleryList;