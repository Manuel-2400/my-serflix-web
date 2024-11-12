"use client";
import React from 'react';
// import Image from 'next/image';
import { Main } from '@/layout/Main/main';

const Support = () => {
  return (
    <Main>
    <div className="contacto-page">
      <section className="banner">
        <h1>Soporte</h1>
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

export default Support