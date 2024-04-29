import React, { useState } from "react";
import "./MyBookings.css";
import Navbar from "./Navbar";

import searchgrey from "../asset/searchgrey.png";
import searchwhite from "../asset/searchwhite.png";

import verifiedtick from "../asset/verifiedtick.png";
import oralhealth from "../asset/oralhealth.png";
import HospitalCenter from "./HospitalCenter";

const MyBookings = ({appointments}) => {
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

      {appointments ? (
        <div className="medicalCenters">
          <div>
            <div>
              {appointments.length ? (
                appointments.map((center, index) => (
                  <HospitalCenter
                    center={center}
                    key={index}
                    readOnly

                  />
                ))
              ) : (
                <h1>No bookings yet</h1>
              )}
            </div>

            <img className="oralhealth" src={oralhealth} alt="" srcset="" />
          </div>
        </div>
      ) : (
        <h1 className="Nothing">Please Select State and City</h1>
      )}


    </>
  );
};

export default MyBookings;
