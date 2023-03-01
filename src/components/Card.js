import React from "react";
import ellipsis from "../images/icon-ellipsis.svg";

const Card = ({ title, current, lastweek }) => {
  return (
    <div className="card">
      <div className="top--card">
        <h3 className="card--title">{title}</h3>
        <img src={ellipsis} alt="" />
      </div>

      <div className="bottom--card">
        <h2 className="time--now">{current}hrs</h2>
        <p className="time--lastweek">Last week - {lastweek}hrs</p>
      </div>
    </div>
  );
};

export default Card;
