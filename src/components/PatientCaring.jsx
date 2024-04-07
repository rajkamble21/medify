import React from "react";
import "./PatientCaring.css";
import bluetick from "../asset/bluetick.png";
import caring from "../asset/caring.png";

const PatientCaring = () => {
  return (
    <div className="PatientCaring">
      <img src={caring} alt="" srcset="" />
      <div>
        <h2>HELPING PATIENTS FROM AROUND THE GLOBE!!</h2>
        <h1><span>Patient</span> <span>Caring</span> </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div>
          <img src={bluetick} alt="" srcset="" />
          <p>Stay Updated About Your Health</p>
        </div>
        <div>
          <img src={bluetick} alt="" srcset="" />
          <p>Check Your Results Online</p>
        </div>
        <div>
          <img src={bluetick} alt="" srcset="" />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
