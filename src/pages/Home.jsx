import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import About from "../components/About";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Home Page</h1>
      </div>
      <About />
    </>
  );
}

export default Home;
