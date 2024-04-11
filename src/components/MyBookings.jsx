import React, { useState } from "react";
import "./MyBookings.css";
import Navbar from "./Navbar";

import searchgrey from "../asset/searchgrey.png";
import searchwhite from "../asset/searchwhite.png";

const MyBookings = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <div className="blueSection">
      My Bookings
      </div>
      <div className="floating-search">
        <div className="input-controll input-width">
          <img src={searchgrey} alt="" srcset="" />
          <input
            type="text"
            placeholder="search by hospital"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <button className="search-btn">
          <img src={searchwhite} alt="" srcset="" />
          Search
        </button>
      </div>
    </>
  );
};

export default MyBookings;
