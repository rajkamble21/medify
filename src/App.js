import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogAndNews from "./components/BlogAndNews";
import DownloadSection from "./components/DownloadSection";
import FooterSection from "./components/FooterSection";
import HeaderOne from "./components/HeaderOne";
import HeroSection from "./components/HeroSection";
import OurFamilySection from "./components/OurFamilySection";
import OurTeam from "./components/OurTeam";
import PatientCaring from "./components/PatientCaring";
import QuestionSection from "./components/QuestionSection";
import Specialisation from "./components/Specialisation";
import FindDoctor from "./components/FindDoctor";
import "./App.css";

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.log("Error fetching states");
      } finally {
        setLoading(false);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/cities/${selectedState}`
          );
          setCities(response.data);
        } catch (error) {
          console.log("Error fetching cities");
        }
      }
    };

    fetchCities();
  }, [selectedState]);

  useEffect(() => {
    const fetchMedicalCenters = async () => {
      if (selectedState || selectedCity) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
          );
          setMedicalCenters(response.data);
          console.log(response.data);
        } catch (error) {
          console.log("Error fetching medical centers");
        }
      }
    };

    fetchMedicalCenters();
  }, [selectedState, selectedCity]);

  return (
    <>
      <HeaderOne />
      <Routes>
        <Route
          path="/"
          element={
            <HeroSection
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              states={states}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              cities={cities}
            />
          }
        />
        <Route
          path="/findDoctor"
          element={
            <FindDoctor
              selectedState={selectedState}
              setSelectedState={setSelectedState}
              states={states}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              cities={cities}
              medicalCenters={medicalCenters}
            />
          }
        />
      </Routes>
      <QuestionSection />
      <DownloadSection />
      <FooterSection />
    </>
  );
}

export default App;
