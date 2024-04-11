import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col, Card } from 'react-bootstrap';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { vData3,vData4 } from '../data.js'
import { useState } from 'react';
function News() {
  const [myData3, setMyData3] = useState(vData3);
  const [myData4, setMyData4] = useState(vData4);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div  className='swiper'>
        <div className='News'>
        <span>News</span>
        </div>
        <Swiper
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className='py-4'
        >
          {myData3.map((item, i) => (
            <SwiperSlide key={i} >
              <Row>
                <Col >
                  <Card.Img variant="top" src={`../img/${item.img}`} />
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div className="News">
        <span>Event</span>
        </div>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className='py-4'
          spaceBetween={20}
        > 
          {myData4.map((item, i) => (
            <SwiperSlide key={i} >
              <Row>
                <Col>
                    <Card.Img variant="top" src={`../img/${item.img}`} />
                </Col>
              </Row>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}


export default News;