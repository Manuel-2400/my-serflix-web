import React from 'react';
import { Header } from "../../layout/Main/subComponents/Header/header";
import { Footer } from "../../layout/Main/subComponents/Footer/footer";
import './contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contacto-page">
    <Header />
      {/* Banner con imagen de fondo */}
      <section className="banner">
        <h1>Contáctanos</h1>
      </section>

      {/* Información de contacto */}
      <section className="contact-info">
        <p>Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...</p>
        <div className="address">
          <p>Bvr. Libertadores De América #52 - 49,<br />
             Medellín, Antioquia, Colombia.</p>
          <p>Horario:<br />
             Lunes a viernes,<br />
             de 8 a. m. a 5 p. m.</p>
          <p>(555) 555-5555<br />
             SerFlix@SerFlix.com</p>
        </div>
      </section>

      {/* Mapa */}
      <section className="map">
        <img src="map-placeholder.png" alt="Ubicación en el mapa" />
      </section>

      {/* Formulario de contacto */}
      <section className="contact-form">
        <h2>Ponte en contacto.</h2>
        <form>
          <label>
            Correo electrónico (obligatorio)
            <input type="email" required />
          </label>
          <label>
            Mensaje (obligatorio)
            <textarea required></textarea>
          </label>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};
