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

const Appointments = ({
  name,
  state,
  city,
  appointments,
  addAppointment,
  availableSlots,
  setAvailableSlots,
}) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDaySelect = (index) => {
    setSelectedDay(index);
    setSelectedSlot("");
    setActiveSlide(index);
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    // Remove the selected slot from availableSlots
    const updatedAvailableSlots = availableSlots.map((day) => ({
      ...day,
      morning: day.morning.filter((item) => item !== slot),
      afternoon: day.afternoon.filter((item) => item !== slot),
      evening: day.evening.filter((item) => item !== slot),
    }));
    setAvailableSlots(updatedAvailableSlots);

// Update availableSlots with the modified data
setAvailableSlots(updatedAvailableSlots);

    addAppointment(name, availableSlots[selectedDay].day, slot, state, city);
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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {availableSlots.map((slot, index) => (
            <SwiperSlide key={index} onClick={() => handleDaySelect(index)}>
              <div className={`slide ${activeSlide === index ? "active" : ""}`}>
                <h1>{slot.day}</h1>
                <span>
                  {slot.morning.length +
                    slot.afternoon.length +
                    slot.evening.length}{" "}
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
          {selectedDay >= 0 &&
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
          {selectedDay >= 0 &&
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
          {selectedDay >= 0 &&
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
