import React from "react";
import "./Success.css";
import fav from "../../assests/favicon 2.svg";
import success from "../../assests/icon-park_success.svg";
import { IoIosArrowForward } from "react-icons/io";

const Success = () => {
  return (
    <div className="successContainer">
      <div className="success">
        <img src={fav} alt="" />
      </div>

      <div>
        <section>
          <div className="successLogo">
            <img src={success} alt="" />
          </div>
          <div className="success-heading">
            <h1>Success</h1>
          </div>
          <div className="success-info">
            <p>You have successfully subscribed for Blueroomcare</p>
          </div>
        </section>
      </div>
      <div className="btnDiv">
        <button className="btn">
          <IoIosArrowForward className="btnIcon" />
          <h2>Back to app</h2>
        </button>
      </div>
    </div>
  );
};

export default Success;
