import "./App.css";
import "@fontsource/plus-jakarta-sans";

import Header from "./components/Header";
import TopSection from "./components/topSection/TopSection";
import Analysis from "./components/analysis/Analysis";
import HowItWorks from "./components/howItWorks/HowItWorks";
import Pricing from "./components/pricing/Pricing";
import Faq from "./components/faq/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TopSection />
      <Analysis />
      <div className="howitworks-wrapper">
        <div className="howitworks-container">
          <h2>How It Works </h2>
        </div>
        <div className="howitworks-main-wrapper">
          <HowItWorks />
          <HowItWorks />
          <HowItWorks />
        </div>
        <div className="how-it-works-bottom-text">
          <p>
            This is our famous and most popular 3 cycle roll over design to
            produce 10 odds and 1000% profit return(ROI) at the end of the cycle
            every single week of the year. The odds will be available on your
            dashboard after you subscribe. You can bet/invest at any betting
            website of your choice. Bet days are Mondays, Wednesdays and
            Fridays.
          </p>
        </div>
      </div>
      {/* <div className="bluebackground-text">
        “Football is a global game with a turn over of $250 billion yearly” -
        Torrens University, Australia.
        <br />
        The question is, “are you getting your share of football money?”
      </div> */}
      <div className="pricing-header">
        {" "}
        <h2>Subscribe to a plan Now</h2>
      </div>

      <div className="pricing-wrapper">
        <Pricing />
        <Pricing />
      </div>
      <Faq />
      <div className="bluebackground-text">
        “Football is a global game with a turn over of $250 billion yearly” -
        Torrens University, Australia.
        <br />
        The question is, “are you getting your share of football money?”
        <button>Get started</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
