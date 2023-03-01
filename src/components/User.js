import React from "react";
import jeremy from "../images/image-jeremy.png";

export default function User({ handleclick, timeframe }) {
  // Not good code -- should have restructured this better using state --or mapped out the button text from the json data
  // <>>>>>>> Change color when timeframe matches the btn text
  const btnDaily = {
    color: timeframe === "Daily" ? "var(--paleblue)" : "var(--desaturatedblue)",
  };
  const btnWeekly = {
    color:
      timeframe === "Weekly" ? "var(--paleblue)" : "var(--desaturatedblue)",
  };
  const btnMonthly = {
    color:
      timeframe === "Monthly" ? "var(--paleblue)" : "var(--desaturatedblue)",
  };

  return (
    <section className="user">
      <div className="user_details">
        <img src={jeremy} alt="Jeremy" />
        <div className="user_dets">
          <p className="user--text">Report for</p>
          <h1 className="user--title">Jeremy Robson</h1>
        </div>
      </div>
      <div className="btns">
        <button
          className="btn_timeframe"
          onClick={handleclick}
          style={btnDaily}
        >
          Daily
        </button>
        <button
          className="btn_timeframe"
          onClick={handleclick}
          style={btnWeekly}
        >
          Weekly
        </button>
        <button
          className="btn_timeframe"
          onClick={handleclick}
          style={btnMonthly}
        >
          Monthly
        </button>
      </div>
    </section>
  );
}
