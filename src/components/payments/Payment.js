import React from "react";
import "./Payment.css";
import fav from "../../assests/favicon 2.svg";
import { GoPrimitiveDot } from "react-icons/go";
import { MdArrowBack } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Payment = () => {
  return (
    <div>
      <div className="topNav">
        <MdArrowBack className="topNav-back" />
        <h2 className="topNav-header">Subscription</h2>
      </div>

      <div className="fav">
        <img src={fav} alt="" />
      </div>

      <div className="infoContainer container">
        <section className="info">
          <div>
            <h3 className="infoHeader">Premium Plan</h3>
            <h3>randomuser@gmail.com</h3>
          </div>
          <div className="infoPrice">
            <h5>₦ 5,000</h5>
          </div>
          <div>
            <p>This will cost N5000 per week, there will be</p>
            <p>unlimited video and chat session feature</p>
          </div>

          <ul className="infoList">
            <li>
              <GoPrimitiveDot className="infoIcon" />
              <p>Begin therapy with professionals(MS, LMFT)</p>
            </li>
            <li>
              <GoPrimitiveDot className="infoIcon" />
              <p>Write or read messages as often as you like</p>
            </li>
            <li>
              <GoPrimitiveDot className="infoIcon" />
              <p>Switch to any of our 25,000 therapists if needed</p>
            </li>
            <li>
              <GoPrimitiveDot className="infoIcon" />
              <p>Cancel online at any time for any reason</p>
            </li>
          </ul>
        </section>
      </div>
      <div className="btnDiv">
        <button className="btn">
          <IoIosArrowForward className="btnIcon" />
          <h2>Get Started Today</h2>
        </button>
      </div>
    </div>
  );
};

export default Payment;
