import React from "react";
import "./Error.css";
import fav from "../../assests/favicon 2.svg";
import error from "../../assests/icon-park_unsuccess.svg";
import { IoIosArrowForward } from "react-icons/io";

const Success = () => {
  return (
    <div className="errorContainer">
      <div className="error">
        <img src={fav} alt="" />
      </div>

      <div>
        <section>
          <div className="errorLogo">
            <img src={error} alt="" />
          </div>
          <div className="error-heading">
            <p>Unsuccessful</p>
          </div>
          <div className="error-info">
            <p>
              Unfortuantely, your subscription to blueroom care wasn’t
              successful.
            </p>
          </div>
        </section>
      </div>
      <div className="btnDiv btnError">
        <button className="btn">
          <IoIosArrowForward className="btnIcon" />
          <h2>Retry Payment</h2>
        </button>
      </div>
    </div>
  );
};

export default Success;
