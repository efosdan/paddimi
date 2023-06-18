import React from "react";
import "./Faq.css";

function Faq() {
  return (
    <div className="faq-wrapper">
      <div className="faq-header-div">Frequent Questions</div>

      <div className="faq-main-text-wrapper">
        <div className="faq-main-text">
          <h2>Why join Paddimi when I can bet on my own?</h2>
          <div className="faq-main-text-para">
            Betting on your own will make you addicted and soon you will become
            greedy and lose more than you win. This can quickly leads to
            frustration and take a toll on your physical and mental health.
          </div>
        </div>

        <div className="faq-main-text">
          <h2>Is Return On Investment 100% guaranteed?</h2>
          <div className="faq-main-text-para">
            We consistently average two weekends wins every month. That is a
            combine profit of $1100 if your investment amount is $50.
          </div>
        </div>

        {/* <div className="faq-main-text">
          <h2>What happens if I don’t win for 1 month?</h2>
          <p>
            This is almost absolutely impossible but in the unlikely event we
            hit such a bad run, you will get the next month subscription free or
            return your subscription fees. We will not get paid if you do not
            make profit.
          </p>
        </div> */}
      </div>
      <div className="faq-main-text-wrapper">
        <div className="faq-main-text-bottom">
          <h2>Why join Paddimi when I can bet on my own?</h2>
          <div className="faq-main-text-para">
            Betting on your own will make you addicted and soon you will become
            greedy and lose more than you win. This can quickly leads to
            frustration and take a toll on your physical and mental health.
          </div>
        </div>

        <div className="faq-main-text-bottom">
          <h2>Is Return On Investment 100% guaranteed?</h2>
          <div className="faq-main-text-para">
            We consistently average two weekends wins every month. That is a
            combine profit of $1100 if your investment amount is $50.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
