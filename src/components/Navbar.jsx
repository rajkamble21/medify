import React from 'react'
import "./Navbar.css"
import logo from "../asset/logo.png";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate  = useNavigate(); 
    
  return (
    <header>
          <img src={logo} alt="" />
          <nav className="nav">
            <a onClick={()=>{navigate("/findDoctor")}} >Find Doctors</a>
            <a>Hospitals</a>
            <a>Medicines</a>
            <a>Surgeries</a>
            <a>Software for Provider</a>
            <a>Facilities</a>
            <button href="#">My Bookings</button>
          </nav>
    </header>
  )
}

export default Navbar