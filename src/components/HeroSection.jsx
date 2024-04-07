import React from "react";
import "./HeroSection.css";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <header>
        <img src={logo} alt="" />
        {/* <nav>
          <Link >Find Doctors</Link>
          <Link >Hospitals</Link>
          <Link >Medicines</Link>
          <Link >Surgeries</Link>
          <Link >Software for Provider</Link>
          <Link >Facilities</Link>
          <Link >My Bookings</Link>
        </nav> */}
      </header>
    </div>
  );
};

export default HeroSection;
