import React, { useState } from "react";
import data from "./data.json";
import User from "./components/User";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [timeframe, setTimeframe] = React.useState("weekly");

  const timeCards = data.map((card) => {
    return (
      <Card
        title={card.title}
        current={card.timeframes.daily.current}
        lastweek={card.timeframes.daily.previous}
      />
    );
  });
  return (
    <>
      <main>
        <User />
        {timeCards}
      </main>
      <Footer />
    </>
  );
};

export default App;
