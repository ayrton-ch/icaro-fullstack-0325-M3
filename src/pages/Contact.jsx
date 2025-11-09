import React, { useState } from "react";
import logo from "../assets/logo_dos.png";

function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <div>
      <div
        className=" py-5 text-center"
        style={{
          background: "linear-gradient(to bottom, #ffe600, #eeeeee)",

          borderTop: "1px solid #e4cd00ff",
          padding: "3rem 1rem",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Contáctanos</h2>
        <p className="text-muted fs-5">Estamos aquí para ayudarte</p>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 overflow-hidden">
              <div className="row g-0 align-items-center ">
                <div className="col-md-5 d-none d-md-block  text-center p-4">
                  <img
                    src={logo}
                    alt="Contacto"
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <h3 className="mt-3 text-primary">Mi Tienda</h3>
                  <h5 className="text-muted">
                    Tu satisfacción es nuestra prioridad
                  </h5>
                </div>

                <div className="col-md-7">
                  <div className="card-body p-5">
                    <h2 className="fw-bold mb-2">¡Hablemos!</h2>
                    <p className="text-muted mb-4">
                      Completa el formulario y te responderemos pronto
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Nombre Completo</label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Juan Pérez"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Correo Electrónico</label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="juan@ejemplo.com"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Tu Mensaje</label>
                        <textarea
                          className="form-control form-control-lg"
                          name="mensaje"
                          rows="5"
                          value={formData.mensaje}
                          onChange={handleChange}
                          placeholder="¿Cómo podemos ayudarte?"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Enviar Mensaje
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
