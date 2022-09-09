import React from "react";
import "./Error.css";
import fav from "../../assests/favicon 2.svg";
import error from "../../assests/icon-park_unsuccess.svg";
import { IoIosArrowForward } from "react-icons/io";

const Success = () => {
  return (
    <div>
      <div className="error">
        <img src={fav} alt="" />
      </div>

      <div>
        <section>
          <div className="errorLogo">
            <img src={error} alt="" />
          </div>
          <div className="error-heading">
            <h1>Unsuccessful</h1>
          </div>
          <div className="error-info">
            <p>
              Unfortuantely, your subscription to <br /> blueroom care wasn’t
              successful.
            </p>
          </div>
        </section>
      </div>
      <div className="btnDiv">
        <button className="btn">
          <IoIosArrowForward className="btnIcon" />
          <h2>Retry Payment</h2>
        </button>
      </div>
    </div>
  );
};

export default Success;
