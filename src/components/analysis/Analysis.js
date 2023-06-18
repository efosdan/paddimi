import React from "react";
import "./Analysis.css";
import Analysis_image from "../../images/analysis_image.png";

function Analysis() {
  return (
    <div className="analysis-wrapper">
      <div className="analysis-container">
        <div className="analysis-text ">
          <h4>We do the analysis for you to play the right odds</h4>
          <span>
            Our dedicated team of reseachers and statistician are working hard
            everyday to provide you with tips for a 1000% return on investment
            every week.
          </span>
          <br />
          <br />
          <br />
          <span>
            We are an exclusive membership football betting investment club and
            here to make you great profile from football weekly.
          </span>
        </div>

        <div className="analysis-image">
          {" "}
          <img src={Analysis_image} alt="Analysis_image"></img>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
