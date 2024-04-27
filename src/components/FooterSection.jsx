import React from "react";
import "./FooterSection.css";
import youtube from "../asset/youtube.png";
import twitter from "../asset/twitter.png";
import facebook from "../asset/facebook.png";
import pintrest from "../asset/pintrest.png";
import logo from "../asset/logo.png";
import arrow from "../asset/arrow.png";

const FooterSection = () => {
  return (
    <div className="FooterSection">
      <div className="footer">
        <div className="footerlogo">
          <img src={logo} alt="logo" />
          <div>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={pintrest} alt="pintrest" />
          </div>
        </div>

        <div className="col-1">
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Privacy Policy
          </i>
        </div>
        <div className="col-1">
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Orthology
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Neurology
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Dental Care
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Opthalmology
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Cardiology
          </i>
        </div>
        <div className="col-1 sm">
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            About Us
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Pricing
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Our Gallery
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Appointment
          </i>
          <i>
            <img className="arrow" src={arrow} alt="arrow" />
            Privacy Policy
          </i>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterSection;
