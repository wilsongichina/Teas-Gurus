import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const logoUrl = 'https://www.onlineclassdoer.com/images/clients/01_huc42f19e23c83d0d4e268ef02649e2b0c_3097_4c3beb333778d074c79fd00472a52d29.webp';

const LogoSlide = React.memo(() => (
  <div className='h-[50px] md:w-[180px] w-[100%] flex justify-center'>
    <img src={logoUrl} alt="Client logo" className='md:w-[160px] w-[160px]' loading="lazy" />
  </div>
));

function LogoSlider() {
  const slides = useMemo(() => Array(8).fill(null).map((_, index) => (
    <SwiperSlide key={index}>
      <LogoSlide />
    </SwiperSlide>
  )), []);

  const swiperParams = useMemo(() => ({
    pagination: true,
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 0,
    mousewheel: true,
    modules: [Pagination, Navigation],
    breakpoints: {
      200: { slidesPerView: 1 },
      350: { slidesPerView: 2 },
      450: { slidesPerView: 2 },
      768: { slidesPerView: 4, spaceBetween: 30 },
      1024: { slidesPerView: 5, spaceBetween: 40 },
    }
  }), []);

  return (
    <div className='md:h-[130px] h-[100px] w-full flex justify-center mt-[80px]'>
      <div className='md:w-[85%] w-[90%]'>
        <Swiper {...swiperParams} className="mySwiper">
          {slides}
        </Swiper>
      </div>
      {/* <div className='md:w-[85%] w-[90%]'>
        <Swiper {...swiperParams} className="mySwiper">
          {slides}
        </Swiper>
      </div> */}
    </div>
  );
}

export default React.memo(LogoSlider);