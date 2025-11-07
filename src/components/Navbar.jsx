import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import useProductStore from "../store/productStore";
import "../styles/Navbar.css";

function Navbar() {
  const cart = useProductStore((state) => state.cart);
  let cartItemsCount = cart.length;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{
          background: "#FFE600",
        }}
      >
        <div className="container ">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="Logo"
              width="60"
              height="48"
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="d-flex align-items-center ms-auto order-lg-last">
            <button
              type="button"
              className="btn btn-link p-0 d-flex align-items-center position-relative me-3"
              title="Carrito"
              aria-label="Carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="img"
                style={{
                  color: "#111111ff",
                }}
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg>
              {cartItemsCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.5rem" }}
                >
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              boxShadow: "none",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="img"
              style={{
                transition: "transform 0.3s ease",
              }}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
