import React from "react";
import "./TopSection.css";
import TopImage from "../../images/top_image.png";

function TopSection() {
  return (
    <div className="top-wrapper">
      <div className="topsection_wrapper">
        <div className="topsection-img">
          <img className="top_image" src={TopImage} alt="topimage" />
        </div>
        <div className="topsection-text">
          <div className="uppertext-one">
            Take the Guessing away from Betting!
          </div>
          <div className="uppertext-two">
            {" "}
            Reduce the gamble in your bets and get guaranteed weekly returns on
            every bet you invest.
          </div>
        </div>
      </div>
      <div className="button-top">
        <button className="top-button"> Get started</button>
      </div>
    </div>
  );
}

export default TopSection;
