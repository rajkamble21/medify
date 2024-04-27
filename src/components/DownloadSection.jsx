import "./DownloadSection.css";
import img from "../asset/downloadsectioncropped.png";
import downarrow from "../asset/downarrow.png";
import apple from "../asset/apple.png";
import google from "../asset/google.png";

import React from "react";

const DownloadSection = () => {
  return (
    <div className="DownloadSection">
      <img className="mobile" src={img} alt="" srcset="" />
      <img className="downarrow" src={downarrow} alt="" srcset="" />
      <div>
        <h2>
          Download the <span>Medify</span> App
        </h2>
        <p>Get the link to download the app</p>
        <div className="input-button">
          <div className="input">
            <div>+91</div>
            <input type="text" placeholder="Enter phone number" />
          </div>
          <button className="Send-SMS">Send SMS</button>
        </div>
        <div className="apple-google">
          <img src={google} alt="" srcset="" />
          <img src={apple} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
