import React from "react";
import "./QuestionSection.css";
import doctor from "../asset/doctor.png"
import plus from "../asset/+.png"
import likes from "../asset/likes.png"
import love from "../asset/love.png"


const QuestionSection = () => {
  return (
    <div className="QuestionSection">
      <div className="getyourans">Get Your Answer</div>
      <div className="frequent">Frequently Asked Questions</div>
      <div className="imgque">
        <img className="doctor" src={doctor} alt="" srcset="" />
        <img className="likes" src={likes} alt="" srcset="" />
        <img className='love' src={love} alt="" srcset="" />
        
        <div className="que">
            <div>
            <p>Why choose our medical for your family?</p>
            <img src={plus} alt="" srcset="" />
            </div>
            <div>
            <p>Why we are different from others?</p>
            <img src={plus} alt="" srcset="" />
            </div>
            <div>
            <p>Trusted & experience senior care & love</p>
            <img src={plus} alt="" srcset="" />
            </div>
            <div>
            <p>How to get appointment for emergency cases?</p>
            <img src={plus} alt="" srcset="" />
            </div>            
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
