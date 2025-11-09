import React from "react";
import { Link } from "react-router-dom";
import useProductStore from "../../store/productStore";
import "../../styles/Cart.css";
import { useAlert } from "../../context/AlertContext";
const Cart = () => {
  const { showAlert } = useAlert();

  const cart = useProductStore((state) => state.cart);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const clearCart = useProductStore((state) => state.clearCart);

  // Calcular total correctamente
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Si el carrito está vacío
  if (cart.length === 0) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="text-center">
          <div className="mb-4">
            <svg
              width="100"
              height="100"
              fill="currentColor"
              className="text-muted"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598L13 9.598a.5.5 0 0 1-.465.402H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
          <h2 className="text-muted mb-3">Tu carrito está vacío</h2>
          <p className="text-muted mb-4">
            ¡Agrega algunos productos increíbles!
          </p>
          <Link to="/productos" className="btn-explorar btn-lg px-4">
            Explorar Productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100  py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="h3 mb-0">Mi Carrito</h1>
            <p className="text-muted">
              {cart.length} producto{cart.length !== 1 ? "s" : ""} en tu carrito
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white">
                <h5 className="mb-0">Productos</h5>
              </div>
              <div className="card-body p-0">
                {cart.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-3 ${
                      index !== cart.length - 1 ? "border-bottom" : ""
                    }`}
                  >
                    <div className="row align-items-center">
                      <div className="col-3 col-md-2">
                        <div
                          className="bg-light rounded p-2"
                          style={{ height: "80px" }}
                        >
                          <img
                            src={item.image}
                            className="img-fluid h-100 w-100"
                            style={{ objectFit: "contain" }}
                            alt={item.title}
                          />
                        </div>
                      </div>

                      <div className="col-6 col-md-7">
                        <h6 className="mb-1">{item.title}</h6>
                        <p className="text-muted small mb-1 text-capitalize">
                          {item.category}
                        </p>
                        <p className=" fw-bold mb-0">${item.price}</p>
                      </div>

                      <div className="col-3 col-md-3 text-end">
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            removeFromCart(item.id);
                            showAlert(
                              "Producto eliminado del carrito",
                              "danger"
                            );
                          }}
                          title="Eliminar producto"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="card shadow-sm border-0 sticky-top"
              style={{ top: "20px" }}
            >
              <div
                className="card-header  text-black"
                style={{ backgroundColor: "#FFE600" }}
              >
                <h5 className="mb-0">Resumen del Pedido</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Productos:</span>
                  <span className="fw-semibold">{cart.length}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span className="text-success">Gratis</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-5 fw-bold">Total:</span>
                  <span className="fs-4 fw-bold text-success">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="d-grid gap-2">
                  <button
                    className="btn btn-lg"
                    style={{ backgroundColor: "#FFE600" }}
                    onClick={() => {
                      showAlert("Procesando pago...", "info");

                      setTimeout(() => {
                        showAlert("Pago realizado con éxito", "success");
                      }, 2000);
                    }}
                  >
                    Proceder al Pago
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      clearCart();
                      showAlert("Carrito vaciado", "warning");
                    }}
                  >
                    Vaciar Carrito
                  </button>
                  <Link to="/productos" className="btn btn-outline-primary">
                    ← Seguir Comprando
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
