import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Cz from "../../img/cz.jpg";
import Ecommerce from "../../img/vjthalearning.png";
import HOC from "../../img/spotify.png";
import Ac from "../../img/Accenture.png"; 
import Hackerrank from "../../img/hackerrank.png";
import Outstanding from "../../img/Outstanding.jpg"
import { themeContext } from "../../Context"; 
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src="https://user-images.githubusercontent.com/53153822/141642696-b25ce0be-3f07-4c62-a5e4-f5c0b43d4280.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hackerrank} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Cz} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Outstanding} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ac} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
