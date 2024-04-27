import React from "react";
import "./OurTeam.css";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ahemad from "../asset/ahemad.png";
import ankur from "../asset/ankur.png";
import heena from "../asset/heena.png";
import rajdeep from "../asset/rajdeep.png";
import sudhir from "../asset/sudhir.png";

const OurTeam = () => {
  return (
    <>
    <div className="OurTeam">
      <h1>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: 1200 }}
      >
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahemad} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={rajdeep} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Rajdeep Sardesai</h1>
              <p>Cardiologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={sudhir} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Sudhir Chaudhary</h1>
              <p>ENT specialist</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div className="OurTeam-sm">
      <h1>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: 320 }}
      >
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahemad} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={rajdeep} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Rajdeep Sardesai</h1>
              <p>Cardiologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={sudhir} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Sudhir Chaudhary</h1>
              <p>ENT specialist</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
};

export default OurTeam;
