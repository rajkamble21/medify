import React from "react";
import "./HeroSection.css";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import img from "../asset/hero.png";
import percent30 from "../asset/percent30.png";
import percent100 from "../asset/percent100.png";
import searchgrey from "../asset/searchgrey.png";
import searchwhite from "../asset/searchwhite.png";
import Doctorlogo from "../asset/Doctorlogo.png";
import Ambulance from "../asset/Ambulance.png";
import Capsule from "../asset/Capsule.png";
import Hospital from "../asset/Hospital.png";
import Drugstore from "../asset/Drugstore.png";

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

      <div className="floating-div">
        <div className="form">
          <div className="input-controll">
            <img src={searchgrey} alt="" srcset="" />
            <input type="text" placeholder="State" />
          </div>
          <div className="input-controll">
            <img src={searchgrey} alt="" srcset="" />
            <input type="text" placeholder="City" />
          </div>
          <button>
            <img src={searchwhite} alt="" srcset="" />
            Search
          </button>
        </div>
        <h5>You may be looking for</h5>
        <div className="category">
          <div>
            <img src={Doctorlogo} alt="" />
            <h6>Doctors</h6>
          </div>
          <div>
            <img src={Drugstore} alt="" />
            <h6>Labs</h6>
          </div>
          <div>
            <img src={Hospital} alt="" />
            <h6>Hospitals</h6>
          </div>
          <div>
            <img src={Capsule} alt="" />
            <h6>Medical store</h6>
          </div>
          <div>
            <img src={Ambulance} alt="" />
            <h6>Ambulance</h6>
          </div>
        </div>
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
