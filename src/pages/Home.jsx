import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import About from "./About";
import ProductCard from "../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Home Page</h1>
        <ProductCard
          product={{ id: 1, title: "Product 1", price: 100, image: logo }}
        />
      </div>
    </>
  );
}

export default Home;
