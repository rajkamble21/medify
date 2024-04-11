import React, { useState } from "react";
import "./HospitalCenter.css";
import hpcenter from "../asset/hpcenter.png";
import likebtn from "../asset/likebtn.png";
import Appointments from "./Appointments";

const HospitalCenter = ({ center }) => {
  const [showLower, setShowLower] = useState(false);

  return (
    <div className="center">
      <div className="upper">
        <div className="leftimg">
          <img src={hpcenter} alt="" srcset="" />
        </div>
        <div className="middlecontent">
          <h3>{center["Hospital Name"]}</h3>
          <h6>{center.City}, {center.State}</h6>
          <p>Smilessence Center for Advanced Dentistry + 1</p>
          <p>more</p>
          <div>
            <span className="free-span">FREE</span>
            <span className="price-span">₹500</span>
            <span className="fee-span">Consultation fee at clinic</span>
          </div>
          <div className="like-btn">
            <img src={likebtn} alt="" srcset="" />
          </div>
        </div>
        <div className="rightcontent">
          <p>Available Today</p>
          <button onClick={() => setShowLower(!showLower)}>
            Book FREE Center Visit
          </button>
        </div>
      </div>
      {showLower && (
        <div className="lower">
          <Appointments name={center["Hospital Name"]} />
        </div>
      )}
    </div>
  );
};

export default HospitalCenter;
