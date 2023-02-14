import React from "react";
import data from "./data.json";
import User from "./components/User";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  console.log(data);
  return (
    <>
      <main>
        <User />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      <Footer />
    </>
  );
};

export default App;
