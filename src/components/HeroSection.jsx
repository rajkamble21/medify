import React from "react";
import "./HeroSection.css";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import img from "../asset/hero.png";
import percent30 from "../asset/percent30.png";
import percent100 from "../asset/percent100.png";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <header>
        <img src={logo} alt="" />
        <nav className="nav">
          <a href="#">Find Doctors</a>
          <a href="#">Hospitals</a>
          <a href="#">Medicines</a>
          <a href="#">Surgeries</a>
          <a href="#">Software for Provider</a>
          <a href="#">Facilities</a>
          <button href="#">My Bookings</button>
        </nav>
      </header>
      <div className="heroContent">
        <div className="heroText">
          <h3>
            Skip the travel! Find Online <span>Medical</span>{" "}
            <span>Centers</span>
          </h3>
          <p>
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <button>Find Centers</button>
        </div>
        <img src={img} alt="" srcset="" />
      </div>

      

      <div className="offer-img">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{ width: 1250 }}
        >
          <SwiperSlide>
            <img className="offer" src={percent100} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="offer" src={percent30} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="offer" src={percent100} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="offer" src={percent30} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="offer" src={percent100} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
