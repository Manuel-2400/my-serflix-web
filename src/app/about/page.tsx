import React from "react";
import './about.css';
import Image from "next/image";
import { Main } from "@/layout/Main/main";


const About = () => {
  return (
    <Main>
      <div className="about-us">
        <section className="description">
          <p>
            Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir
            un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo
            para compartir con el mundo. Sea lo que sea, la manera en la que cuentes tu
            historia online puede marcar la diferencia.
          </p>
          <Image width={1} height={1} src="/src/img/img-Cinema.jpg" alt="Paisaje" className="image-main" />
        </section>

        <section className="images">
          <div className="image-group">
            <Image width={1} height={1} src="/src/img/img-Cinema2.jpg" alt="Paisaje 1" />
            <Image width={1} height={1} src="/src/img/img-Cinema3.jpg" alt="Paisaje 2" />
          </div>
          <div className="image-text">
            <h2>Hazlo</h2>
            <p>
              Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir
              un pasatiempo en algo más. O bien, es posible que tengas un proyecto creativo
              para compartir con el mundo.
            </p>
          </div>
        </section>

        <section className="faq">
          <h3>¿Esta es una pregunta frecuente?</h3>
          <p>Respuesta a la pregunta frecuente.</p>
          <h3>¿Esta es una pregunta frecuente?</h3>
          <p>Respuesta a la pregunta frecuente.</p>
          <h3>¿Esta es una pregunta frecuente?</h3>
          <p>Respuesta a la pregunta frecuente.</p>
        </section>
      </div>
    </Main>

  );
};

export default About