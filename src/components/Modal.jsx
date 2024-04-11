 // Import Swiper React components
 import React, { useRef, useState } from 'react';
 // Import Swiper React components
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation } from 'swiper/modules';

 import 'swiper/css';
 import 'swiper/css/navigation';
 

 function Modal() {

 
    return (
      <div className='t-Modal'>
      <div className='Modal'>
        <Swiper
      slidesPerView={1}
       navigation={true} modules={[Navigation]}
       autoplay={{ delay: 3000 }}
       > 
       <SwiperSlide>
        <video controls autoPlay muted style={{ width: '100%', height: '100%' }} controlsList="noduration">
          <source src="https://nexen-front.s3.ap-northeast-2.amazonaws.com/kr/kr_06.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video controls autoPlay muted style={{ width: '100%', height: '100%' }}>
          <source src="https://nexen-front.s3.ap-northeast-2.amazonaws.com/kr/kr_03.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      <SwiperSlide>
        <video controls autoPlay muted style={{ width: '100%', height: '100%' }}>
          <source src="https://nexen-front.s3.ap-northeast-2.amazonaws.com/kr/kr_02.mp4" type="video/mp4" />
        </video>
      </SwiperSlide>
      {/* ... */}
    </Swiper>
    </div>
    </div>
    )
  }


  export default Modal;
  