import React from 'react'
import "./Specialisation.css"
import cardiology from "../asset/cardiology.png";
import lab from "../asset/lab.png";
import mri from "../asset/mri.png";
import primary from "../asset/primary.png";
import psycologist from "../asset/psycologist.png";
import test from "../asset/test.png";
import xray from "../asset/xray.png";

const Specialisation = () => {
  return (
    <div className='Specialisation'>
        <h1>Find by specialisation</h1>
        <div className="box-container">
            <div className="box">
                <img src={lab} alt="" srcset="" />
                <h3>Dentistry</h3>
            </div>
            <div className="box">
                <img src={primary} alt="" srcset="" />
                <h3>Primary Care</h3>
            </div>
            <div className="box">
                <img src={cardiology} alt="" srcset="" />
                <h3>Cardiology</h3>
            </div>
            <div className="box">
                <img src={mri} alt="" srcset="" />
                <h3>MRI</h3>
            </div>
            <div className="box">
                <img src={test} alt="" srcset="" />
                <h3>Blood Test</h3>
            </div>
            <div className="box">
                <img src={psycologist} alt="" srcset="" />
                <h3>psycologist</h3>
            </div>
            <div className="box">
                <img src={lab} alt="" srcset="" />
                <h3>Laboratory</h3>
            </div>
            <div className="box">
                <img src={xray} alt="" srcset="" />
                <h3>X-Ray</h3>
            </div>
        </div>
        <button>View All</button>
    </div>
  )
}

export default Specialisation