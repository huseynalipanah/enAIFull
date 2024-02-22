// import Swiper core and required modules
import { Autoplay, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./AIslider.scss";
export default () => {
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/slide");
      const newData = await response.json();
      setSlide(newData);
    };
    fetchData();
  }, []);
  return (
    <>
    {slide && <Swiper
      modules={[ Keyboard,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      keyboard={{
        enabled: false,
      }}
      
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {slide.map((x) => (
        <SwiperSlide key={x._id}>
          <a href={x.link}>
            <img src={x.logo} alt="" />
            <span>{x.name}</span>
          </a>
        </SwiperSlide>
      ))}
    </Swiper> }
    </>
  );
};