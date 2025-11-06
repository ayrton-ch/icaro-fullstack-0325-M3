import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-team">
      <h1>Sobre Nosotros</h1>
      <p>
        Bienvenido a nuestra aplicación. Somos un equipo dedicado a crear
        soluciones para nuestros usuarios.
      </p>
      <div>
        <div className="about-team-member">
          <h3>María García</h3>
          <p>Desarrolladora</p>
        </div>
      </div>
    </div>
  );
}

export default About;
