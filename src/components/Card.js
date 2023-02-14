import React from "react";
import ellipsis from "../images/icon-ellipsis.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="top--card">
        <h4 className="card--title">Work</h4>
        <img src={ellipsis} alt="" />
      </div>

      <div className="bottom--card">
        <h2 className="time--now">32hrs</h2>
        <p className="time--lastweek">Last week - 36hrs</p>
      </div>
    </div>
  );
};

export default Card;
