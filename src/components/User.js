import React from "react";
import jeremy from "../images/image-jeremy.png";

export default function User() {
  return (
    <section className="user">
      <div className="user-details">
        <img src={jeremy} alt="Jeremy" />
        <p className="user--text">Report for</p>
        <h1 className="user--title">Jeremy Robson</h1>
      </div>

      <button className="btn_timeframe">Daily</button>
      <button className="btn_timeframe">Weekly</button>
      <button className="btn_timeframe">Monthly</button>
    </section>
  );
}
