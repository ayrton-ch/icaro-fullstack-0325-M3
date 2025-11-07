import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import useProducts from "../hooks/useProducts";
import "../styles/Home.css";
function Home() {
  const { products, loadProducts } = useProducts();
  const [productosDestacados, setProductosDestacados] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      setProductosDestacados(products.slice(2, 10));
    }
  }, [products]);

  return (
    <>
      <div
        className="min-vh-100 "
        style={{
          background:
            "linear-gradient(to bottom, #829ab1, #b6c7daff, #d9e4f0ff, #ffffffff, #ffffffff)",
        }}
      >
        <div className=" py-md-5">
          <div className="row justify-content-center ">
            <div className="col-lg-8 col-md-10 col-sm-12   py-5">
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
                className="btn-productos btn-lg px-5 py-3 rounded-pill fw-semibold"
                style={{ boxShadow: "0 8px 15px rgba(255, 253, 107, 0.4)" }}
              >
                Ver Productos
              </Link>
            </div>
          </div>
        </div>

        {productosDestacados.length > 0 && (
          <div className="  py-md-5">
            <div className="container">
              <div className="text-center mb-4 mb-md-5">
                <h2 className="fw-bold  mb-2 fs-3 fs-md-2">
                  Productos Destacados
                </h2>
                <p className="text-muted fs-6 fs-md-5 px-3">
                  Los mejores productos seleccionados para ti
                </p>
                <hr className="border border-warning border-2 opacity-75 w-25 mx-auto mt-3" />
              </div>

              <div className="row g-3 g-md-4">
                {productosDestacados.map((producto) => (
                  <div key={producto.id} className="col-12 col-sm-6 col-lg-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <div
                        className="card-img-top bg-light p-3"
                        style={{ height: "200px" }}
                      >
                        <img
                          src={producto.image}
                          className="img-fluid h-100 w-100"
                          style={{ objectFit: "contain" }}
                          alt={producto.title}
                        />
                      </div>
                      <div className="card-body d-flex flex-column">
                        <div className="mb-2">
                          <span className="badge bg-primary text-uppercase small">
                            {producto.category}
                          </span>
                        </div>
                        <h5 className="card-title fw-bold text-dark mb-2">
                          {producto.title.length > 50
                            ? `${producto.title.substring(0, 50)}...`
                            : producto.title}
                        </h5>
                        <hr className="border border-light border-1 opacity-50 my-2" />
                        <p className="card-text text-muted small flex-grow-1">
                          {producto.description.length > 80
                            ? `${producto.description.substring(0, 80)}...`
                            : producto.description}
                        </p>
                        <div className="mt-auto">
                          <Link
                            to="/productos"
                            className="btn btn-primary w-100"
                          >
                            Ver Producto
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-4 mt-md-5">
                <Link
                  to="/productos"
                  className="btn-productos btn-lg px-4 px-md-5 py-3 rounded-pill fw-semibold"
                >
                  Ver Mas Productos
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="container bg-white pt-5 pb-4 pb-md-5 px-3 px-md-4">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold text-black fs-3 fs-md-2">
              Por qué elegirnos
            </h2>
            <p className="text-muted fs-6 fs-md-5 px-3">
              Conoce las ventajas de comprar con nosotros
            </p>
            <hr className="border border-success border-2 opacity-50 w-25 mx-auto mt-3" />
          </div>

          <div className=" row g-3 g-md-4  ">
            <div className="col-12 col-sm-6 col-lg-4  ">
              <div
                className="card h-100 border-0 shadow-sm  text-center"
                style={{
                  background: "linear-gradient(135deg, #ffc400ff, #FFE600)",
                }}
              >
                <div className="card-body p-3 p-md-4 ">
                  <div className="fs-1 mb-3 text-primary">Catálogo</div>
                  <h5 className="card-title text-dark fw-bold">
                    Amplio Catálogo
                  </h5>
                  <hr className="border border-primary border-1 opacity-25 w-50 mx-auto my-3" />
                  <p className="card-text text-muted small">
                    Miles de productos de las mejores marcas para todos los
                    gustos
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-sm text-center"
                style={{
                  background: "linear-gradient(135deg, #FFE600, #ffbb00ff)",
                }}
              >
                <div className="card-body p-3 p-md-4 ">
                  <div className="fs-1 mb-3 text-primary ">Envío</div>
                  <h5 className="card-title text-dark fw-bold">Envío Gratis</h5>
                  <hr className="border border-warning border-1 opacity-25 w-50 mx-auto my-3" />
                  <p className="card-text text-muted small">
                    Envío gratuito en compras superiores a $50. Rápido y seguro
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-4 ">
              <div
                className="card h-100 border-0 shadow-sm text-center"
                style={{
                  background: "linear-gradient(135deg, #FFE600, #ffd900ff)",
                }}
              >
                <div className="card-body p-3 p-md-4">
                  <div className="fs-1 mb-3 text-primary">Pago</div>
                  <h5 className="card-title text-dark fw-bold">Pago Seguro</h5>
                  <hr className="border border-success border-1 opacity-25 w-50 mx-auto my-3" />
                  <p className="card-text text-muted small">
                    Múltiples métodos de pago con la máxima seguridad
                    garantizada
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
