import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div
        className="min-vh-100"
        style={{
          background: "#EEEEEE",
        }}
      >
        <div className="container-fluid text-center text-black py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid mb-4"
                style={{ maxHeight: "150px" }}
              />
              <h1
                className="display-3 fw-bold mb-4"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Bienvenido a Mi Tienda
              </h1>
              <p className="fs-4 mb-4 opacity-75">
                Descubre los mejores productos con la mejor calidad y precio
              </p>
              <Link
                to="/productos"
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-semibold"
                style={{ boxShadow: "0 8px 15px rgba(107, 171, 255, 0.4)" }}
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">🛍️</div>
                  <h5 className="card-title text-dark">Amplio Catálogo</h5>
                  <p className="card-text text-muted">
                    Encuentra todo lo que necesitas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">🚚</div>
                  <h5 className="card-title text-dark">Envío Rápido</h5>
                  <p className="card-text text-muted">
                    Recibe tus productos en tiempo récord
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">💳</div>
                  <h5 className="card-title text-dark">Pago Seguro</h5>
                  <p className="card-text text-muted">
                    Compra con total confianza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
