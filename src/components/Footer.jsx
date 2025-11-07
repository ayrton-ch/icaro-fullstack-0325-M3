import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Acerca de</h3>
          <p>
            Mi Tienda es una plataforma dedicada a ofrecer los mejores productos
            a nuestros clientes con calidad y confianza.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@ejemplo.com</p>
          <p>Tel: +123 456 789</p>
        </div>
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
