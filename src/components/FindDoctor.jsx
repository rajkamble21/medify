import React from "react";
import Navbar from "./Navbar";
import "./FindDoctor.css";

import searchgrey from "../asset/searchgrey.png";
import searchwhite from "../asset/searchwhite.png";
import verifiedtick from "../asset/verifiedtick.png";
import hpcenter from "../asset/hpcenter.png";
import likebtn from "../asset/likebtn.png";
import oralhealth from "../asset/oralhealth.png";

const FindDoctor = ({
  selectedState,
  setSelectedState,
  states,
  selectedCity,
  setSelectedCity,
  cities,
  medicalCenters,
}) => {
  const dummyData = [
    {
      Address: "3200 PROVIDENCE DRIVE",
      City: "ANCHORAGE",
      "County Name": "ANCHORAGE",
      "Effectiveness of care national comparison":
        "Same as the national average",
      "Effectiveness of care national comparison footnote": "",
      "Efficient use of medical imaging national comparison":
        "Same as the national average",
      "Efficient use of medical imaging national comparison footnote": "",
      "Emergency Services": "Yes",
      "Hospital Name": "PROVIDENCE ALASKA MEDICAL CENTER",
      "Hospital Ownership": "Voluntary non-profit - Church",
      "Hospital Type": "Acute Care Hospitals",
      "Hospital overall rating": 3,
      "Hospital overall rating footnote": "",
      "Meets criteria for meaningful use of EHRs": "Y",
      "Mortality national comparison": "Same as the national average",
      "Mortality national comparison footnote": "",
      "Patient experience national comparison": "Same as the national average",
      "Patient experience national comparison footnote": "",
      "Phone Number": "9075622211",
      "Provider ID": "020001",
      "Readmission national comparison": "Above the national average",
      "Readmission national comparison footnote": "",
      "Safety of care national comparison": "Below the national average",
      "Safety of care national comparison footnote": "",
      State: "Alaska",
      "Timeliness of care national comparison": "Below the national average",
      "Timeliness of care national comparison footnote": "",
      "ZIP Code": 99508,
    },
    {
      Address: "2500 SOUTH WOODWORTH LOOP",
      City: "PALMER",
      "County Name": "MATANUSKA SUSITNA",
      "Effectiveness of care national comparison":
        "Same as the national average",
      "Effectiveness of care national comparison footnote": "",
      "Efficient use of medical imaging national comparison":
        "Same as the national average",
      "Efficient use of medical imaging national comparison footnote": "",
      "Emergency Services": "Yes",
      "Hospital Name": "MAT-SU REGIONAL MEDICAL CENTER",
      "Hospital Ownership": "Voluntary non-profit - Private",
      "Hospital Type": "Acute Care Hospitals",
      "Hospital overall rating": 3,
      "Hospital overall rating footnote": "",
      "Meets criteria for meaningful use of EHRs": "Y",
      "Mortality national comparison": "Same as the national average",
      "Mortality national comparison footnote": "",
      "Patient experience national comparison": "Below the national average",
      "Patient experience national comparison footnote": "",
      "Phone Number": "9078616000",
      "Provider ID": "020006",
      "Readmission national comparison": "Same as the national average",
      "Readmission national comparison footnote": "",
      "Safety of care national comparison": "Same as the national average",
      "Safety of care national comparison footnote": "",
      State: "Alaska",
      "Timeliness of care national comparison": "Same as the national average",
      "Timeliness of care national comparison footnote": "",
      "ZIP Code": 99645,
    },
    {
      Address: "3260 HOSPITAL DR",
      City: "JUNEAU",
      "County Name": "JUNEAU",
      "Effectiveness of care national comparison":
        "Same as the national average",
      "Effectiveness of care national comparison footnote": "",
      "Efficient use of medical imaging national comparison": "Not Available",
      "Efficient use of medical imaging national comparison footnote":
        "Results are not available for this reporting period",
      "Emergency Services": "Yes",
      "Hospital Name": "BARTLETT REGIONAL HOSPITAL",
      "Hospital Ownership": "Government - Local",
      "Hospital Type": "Acute Care Hospitals",
      "Hospital overall rating": 3,
      "Hospital overall rating footnote": "",
      "Meets criteria for meaningful use of EHRs": "Y",
      "Mortality national comparison": "Same as the national average",
      "Mortality national comparison footnote": "",
      "Patient experience national comparison": "Same as the national average",
      "Patient experience national comparison footnote": "",
      "Phone Number": "9077968900",
      "Provider ID": "020008",
      "Readmission national comparison": "Same as the national average",
      "Readmission national comparison footnote": "",
      "Safety of care national comparison": "Same as the national average",
      "Safety of care national comparison footnote": "",
      State: "Alaska",
      "Timeliness of care national comparison": "Same as the national average",
      "Timeliness of care national comparison footnote": "",
      "ZIP Code": 99801,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="blueSection"></div>

      <div className="floating-form">
        <div className="input-controll">
          <img src={searchgrey} alt="" srcset="" />
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="input-controll">
          <img src={searchgrey} alt="" srcset="" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select a city</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <button className="search-btn">
          <img src={searchwhite} alt="" srcset="" />
          Search
        </button>
      </div>

      <div className="medicalCenters">
        <h1>{dummyData.length} medical centers available in Alaska</h1>
        <h6>
          <img src={verifiedtick} alt="" srcset="" />
          Book appointments with minimum wait-time & verified doctor details
        </h6>
        <div>
          <div>
        {dummyData.length ? (
          dummyData.map((center, index) => (
            <div className="center" key={index}>
              <div className="leftimg">
                <img src={hpcenter} alt="" srcset="" />
              </div>
              <div className="middlecontent">
                <h3>Fortis Hospital Richmond Road</h3>
                <h6>Banglore, Karnataka</h6>
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
                <button>Book FREE Center Visit</button>
              </div>
            </div>
          ))
        ) : (
          <h1>Nothing Found</h1>
        )}
        </div>

        <img src={oralhealth} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default FindDoctor;
