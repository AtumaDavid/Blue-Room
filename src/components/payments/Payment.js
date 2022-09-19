import React from "react";
import "./Payment.css";
import fav from "../../assests/favicon 2.svg";
import { GoPrimitiveDot } from "react-icons/go";
import { MdArrowBack } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Payment = () => {
  return (
    <div className="paymentContainer container">
      <div className="topNav">
        <MdArrowBack className="topNav-back" />
        <h2 className="topNav-header">Subscription</h2>
      </div>

      <div className="fav">
        <img src={fav} alt="" />
      </div>

      <div className="infoContainer">
        <section className="info">
          <div className="infoHeader">
            <p>Premium Plan</p>
            <p className="infoHeader-email">randomuser@gmail.com</p>
          </div>
          <div className="infoPrice">
            <p>₦ 5,000</p>
          </div>
          <div className="infoDetails">
            <p>
              This will cost N5000 per week, there will be unlimited video and
              chat session feature
            </p>
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
        <button className="btn btnPayment">
          <IoIosArrowForward className="btnIcon" />
          <h2>Get Started Today</h2>
        </button>
      </div>
    </div>
  );
};

export default Payment;
