import React from "react";
import jeremy from "../images/image-jeremy.png";

export default function User() {
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
        <button className="btn_timeframe">Daily</button>
        <button className="btn_timeframe">Weekly</button>
        <button className="btn_timeframe">Monthly</button>
      </div>
    </section>
  );
}
