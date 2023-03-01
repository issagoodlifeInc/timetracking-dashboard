import React, { useState } from "react";
import data from "./data.json";
import User from "./components/User";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [timeframe, setTimeframe] = React.useState("Weekly");

  const timeCards = data.map((card) => {
    let currentTime;
    let lastWeekTime;

    switch (timeframe) {
      case "Monthly":
        currentTime = card.timeframes.monthly.current;
        lastWeekTime = card.timeframes.monthly.previous;
        break;
      case "Daily":
        currentTime = card.timeframes.daily.current;
        lastWeekTime = card.timeframes.daily.previous;
        break;
      default:
        currentTime = card.timeframes.weekly.current;
        lastWeekTime = card.timeframes.weekly.previous;
        break;
    }
    return (
      <Card title={card.title} current={currentTime} lastweek={lastWeekTime} />
    );
  });

  // Handle change to a different timeframe by the user switching

  const switchTimeFrame = (event) => {
    let selectedTime = event.target.innerHTML;
    setTimeframe(selectedTime);
    console.log(selectedTime);
  };

  return (
    <>
      <main>
        <User handleclick={switchTimeFrame} timeframe={timeframe} />
        {timeCards}
      </main>
      <Footer />
    </>
  );
};

export default App;
