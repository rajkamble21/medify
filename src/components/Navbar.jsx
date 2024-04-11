import React from "react";
import "./Navbar.css";
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <img
        src={logo}
        onClick={() => {
          navigate("/");
        }}
        alt=""
      />
      <nav className="nav">
        <a
          onClick={() => {
            navigate("/findDoctor");
          }}
        >
          Find Doctors
        </a>
        <a>Hospitals</a>
        <a>Medicines</a>
        <a>Surgeries</a>
        <a>Software for Provider</a>
        <a>Facilities</a>
        <button
          onClick={() => {
            navigate("/myBookings");
          }}
        >
          My Bookings
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
