import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import useProductStore from "../../store/productStore";
import { useAlert } from "../../context/AlertContext";

function ProductDetail() {
  const { showAlert } = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loadProducts } = useProducts();
  const addToCart = useProductStore((state) => state.addToCart);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/productos");
      }
    }
  }, [products, id, navigate]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 text-muted">Cargando producto...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-light min-vh-100 py-4 py-md-5"
      style={{
        background:
          "linear-gradient(to bottom, #ffec3eff, #eeeeee, #eeeeee, #eeeeee, #eeeeee)",

        borderTop: "1px solid #e4cd00ff",
      }}
    >
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">
                Inicio
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/productos" className="text-decoration-none">
                Productos
              </Link>
            </li>
            <li className="breadcrumb-item active">{product.title}</li>
          </ol>
        </nav>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top"
                style={{
                  height: "500px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                  padding: "20px",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="mb-3">
                <span className="badge bg-primary rounded-pill px-3 py-2">
                  {product.category}
                </span>
              </div>

              <h1 className="h2 fw-bold mb-3">{product.title}</h1>

              <div className="mb-4">
                <h2 className="text-primary fw-bold mb-0">
                  ${product.price.toFixed(2)}
                </h2>
              </div>

              <div className="mb-4">
                <h5 className="fw-semibold mb-2">Descripción</h5>
                <p className="text-muted">{product.description}</p>
              </div>

              <hr />

              <div className="mb-4">
                <small className="text-muted mt-2 d-block">
                  Total:{" "}
                  <strong className="text-primary">
                    ${product.price.toFixed(2)}
                  </strong>
                </small>
              </div>

              <div className="d-grid gap-3 mb-4">
                <button
                  className="btn btn-primary btn-lg fw-semibold shadow-sm"
                  onClick={() => {
                    handleAddToCart();
                    showAlert("Producto agregado al carrito", "success");
                  }}
                >
                  Agregar al Carrito
                </button>
                <Link
                  to="/productos"
                  className="btn btn-outline-secondary btn-lg fw-semibold"
                >
                  ← Ver Más Productos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
