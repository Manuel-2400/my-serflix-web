import React from 'react';
import './contact.css';
// import Image from 'next/image';
import { Main } from '@/layout/Main/main';

const Contact = () => {
  return (
    <Main>
    <div className="contacto-page">
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
        {/* <Image width={1} height={1} src="map-placeholder.png" alt="Ubicación en el mapa" /> */}
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
    </div>
    </Main>
  );
};

export default Contact