import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/slider1.svg";
import image2 from "../assets/slider2.svg";


const Slider: React.FC = () => {
  return (
    <div
      className="slider-wrapper mx-auto"
      style={{
        width: "100%", 
        maxWidth: "1120px", 
        maxHeight: "579px", 
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[528px] w-full md:h-[579px] md:w-[1120px]" 
      >
        <SwiperSlide>
          <img
            src={image1}
            alt="Slider Image 1"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="Slider Image 2"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Slider;
