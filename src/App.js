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
import MyBookings from "./components/MyBookings";



const initialSate = [
  {
    day: "Today",
    morning: ["09:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Tomorrow",
    morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
    afternoon: ["02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  },
  {
    day: "Fri, 12 April",
    morning: [ "09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Sat, 13 April",
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM"],
  },
  {
    day: "Sun, 14 April",
    morning: ["08:00 AM", "08:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Mon, 15 April",
    morning: ["09:00 AM", "09:30 AM", "10:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["05:00 PM", "05:30 PM", "06:00 PM"],
  },
  {
    day: "Tue, 16 April",
    morning: ["09:30 AM"],
    afternoon: ["01:00 PM"],
    evening: ["06:00 PM", "06:30 PM"],
  },
  {
    day: "Wed, 17 April",
    morning: ["10:00 AM", "10:30 AM", "11:00 AM"],
    afternoon: ["01:00 PM", "01:30 PM", "02:00 PM"],
    evening: ["05:00 PM", "05:30 PM"],
  },
  {
    day: "Thu, 18 April",
    morning: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:00 PM"],
    evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"],
  },
  // Add more objects for each day as needed
];







function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [loading, setLoading] = useState(true);


  const [appointments, setAppointments] = useState([]);

  const addAppointment = (hospital, date, time, state, city) => {
    setAppointments([...appointments, { hospital, date, time, state, city }]);
  };

  const [availableSlots, setAvailableSlots] = useState(initialSate);


  useEffect(()=>{
    console.log(appointments);
  })

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

    const fetchMedicalCentersBasedonState = async () =>{
      if (selectedState) {
        try {
          const response = await axios.get(
            `https://meddata-backend.onrender.com/data?state=${selectedState}`
          );
          setMedicalCenters(response.data);          
        } catch (error) {
          console.log("Error fetching madical centers based on state");          
        }
      }
    }


    fetchCities();
    fetchMedicalCentersBasedonState();
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
  }, [selectedCity]);

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
              appointments={appointments}
              addAppointment={addAppointment}
              availableSlots={availableSlots}
              setAvailableSlots={setAvailableSlots}

            />
          }
        />
        <Route
          path="/myBookings"
          element={
            <MyBookings
            appointments={appointments}
              
            />
          }
        />
      </Routes>
      <DownloadSection />
      <FooterSection />
    </>
  );
}

export default App;
