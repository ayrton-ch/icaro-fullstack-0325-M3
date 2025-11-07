import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import About from "./About";

import ProductList from "../components/ProductList/ProductList";

function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Home Page</h1>
        <ProductList
          productos={[
            {
              id: 1,
              title: "Producto 1",
              price: 100,
              image:
                "https://http2.mlstatic.com/D_Q_NP_822196-MLA89388920969_082025-B.webp",
            },
            {
              id: 2,
              title: "Producto 2",
              price: 200,
              image:
                "https://http2.mlstatic.com/D_Q_NP_659315-MLA95216747878_102025-B.webp",
            },
            {
              id: 3,
              title: "Producto 3",
              price: 300,
              image:
                "https://http2.mlstatic.com/D_Q_NP_981442-MLA96423254553_102025-B.webp",
            },
            {
              id: 4,
              title: "Producto 4",
              price: 400,
              image:
                "https://http2.mlstatic.com/D_Q_NP_644777-MLA96099587445_102025-B.webp",
            },
          ]}
          loading={false}
          error={null}
        />
      </div>
    </>
  );
}

export default Home;
