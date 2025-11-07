import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-team">
      <h1>Sobre Nuestra Tienda</h1>
      <p>
        Somos una tienda online especializada en ofrecer productos de calidad
        con la mejor experiencia de compra. Navegá nuestro catálogo, agregá
        productos a tu carrito y disfrutá de una plataforma simple y segura.
      </p>

      <div className="info-section">
        <h3>¿Qué encontrarás aquí?</h3>
        <ul>
          <li>Amplio catálogo de productos</li>
          <li>Sistema de carrito intuitivo</li>
          <li>Búsqueda rápida y eficiente</li>
          <li>Navegación optimizada para todos los dispositivos</li>
        </ul>
      </div>

      <div className="mission-section">
        <h3>Nuestra Misión</h3>
        <p>
          Brindarte la mejor experiencia de compra online con productos
          seleccionados y un servicio de calidad que supere tus expectativas.
        </p>
      </div>

      <div className="contact-info">
        <h3>Contacto</h3>
        <p>
          ¿Tenés alguna consulta? No dudes en contactarnos para ayudarte con tu
          compra.
        </p>
      </div>
    </div>
  );
}

export default About;
