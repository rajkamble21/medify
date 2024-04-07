import "./OurFamilySection.css";
import img from "../asset/widget.png";

import React from "react";

const OurFamilySection = () => {
  return (
    <div className="OurFamilySection">
      <div>
        <h3>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h3>
        <h1>Our Families</h1>
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <img src={img} alt="" srcset="" />
    </div>
  );
};

export default OurFamilySection;
