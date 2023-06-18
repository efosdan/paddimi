import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="howitworks-main-wrapper">
      <div className="howitworks-main">
        <div className="Day-one"> Day 1 </div>
        <div className="invest-div">Invest $50</div>
        <div className="odds-div">on 2.2 odds</div>

        <div className="button-div">
          <button className="button-amount">
            <div className="roi-div">Profit</div>
            <div className="main-amount">$110</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
