import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar/Navbar";
import Featured from "../Components/featured/Featured";
import List from "../Components/List/List";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type="series" />
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    </>
  );
};

export default Home;
