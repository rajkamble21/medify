import "./Appointments.css";
import React, { useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Sample JSON data representing available slots for each day
const availableSlots = {
  Today: {
    morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
  },
  Tomorrow: {
    morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
  "Fri, 12 April": {
    morning: ["08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  "Sat, 13 April": {
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
  },
  "Sun, 14 April": {
    morning: ["08:00 AM", "08:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  "Mon, 15 April": {
    morning: [],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  "Tue, 16 April": {
    morning: ["09:30 AM"],
    afternoon: [],
    evening: ["06:00 PM", "06:30 PM"],
  },
  "Wed, 17 April": {
    morning: ["10:00 AM", "10:30 AM", "11:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM"],
  },
  "Thu, 18 April": {
    morning: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  // Add more days with varying slot counts from 0 to 5 as needed
};

const Appointments = ({name}) => {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDaySelect = (day, index) => {
    setSelectedDay(day);
    setSelectedSlot("");
    setActiveSlide(index); // Set active slide index when a slide is clicked
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const swiperRef = React.useRef(null);

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="appointments">
      <div className="appointments-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {Object.keys(availableSlots).map((day, index) => (
            <SwiperSlide key={day} onClick={() => handleDaySelect(day, index)}>
              <div className={`slide ${activeSlide === index ? "active" : ""}`}>
                <h1>{day}</h1>
                <span>
                  {availableSlots[day].morning.length +
                    availableSlots[day].afternoon.length +
                    availableSlots[day].evening.length}{" "}
                  slots available
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
      <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
      <div className="slots">
        <div className="day morning">
          <h3>Morning</h3>
          {selectedDay &&
            availableSlots[selectedDay].morning.map((slot) => (
              <div
                key={slot}
                className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </div>
            ))}
        </div>
        <div className="day afternoon">
          <h3>Afternoon</h3>
          {selectedDay &&
            availableSlots[selectedDay].afternoon.map((slot) => (
              <div
                key={slot}
                className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </div>
            ))}
        </div>
        <div className="day evening">
          <h3>Evening</h3>
          {selectedDay &&
            availableSlots[selectedDay].evening.map((slot) => (
              <div
                key={slot}
                className={`slot ${selectedSlot === slot ? "selected" : ""}`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
