import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-main">
      <div className="pricing-plan-standard">Standard</div>
      <div className="pricing-plan-amount">$50</div>
      <div className="pricing-plan-monthly">Monthly</div>
      <div className="pricing-plan-list">
        <ul style={{ listStyleType: "disc" }}>
          <li>
            {" "}
            Access to Weekly 3 Cycle roll over with 1000% return on investment
          </li>
        </ul>
      </div>
      <div className="pricing-plan-button">
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Pricing;
