import React from "react";
import './about.css';
import Image from "next/image";
import { Main } from "@/layout/Main/main";
import imageLibrary from './../../img/img-Library.jpg';

const About = () => {
  return (
    <Main>
      <div className="about-us">
      <section className="banner">
        <div className="banner-text">
          <h2>Sobre Nosotros</h2>
          <p>
            SerFlix nace de la idea de buscar una película basado en géneros, cartelera, populares, reseñas, etc...
            Pero, ¿no tienen casi todas las páginas de streaming lo anteriormente dicho? 
            Sí, la mayoría tienen todo eso, pero de forma básica. Nuestro objetivo es darte un mayor panorama, dejar reseñas y 
            que tengas un historial de películas vistas, para así recomendarte posibles películas que te pueden gustar o están 
            en tendencia. Así ayudas a más personas a buscar algo nuevo y/o similar a lo que ves.
          </p>
        </div>
        <div className="banner-image">
          <Image width={500} height={350} src={imageLibrary} alt="Imagen-Libreria-BlancoyNegro" />
        </div>
      </section>
        <section className="faq">
          <h3>¿Somos una copia de Netflix?</h3>
          <p>No, en absoluto. Aunque utilizamos colores y formatos similares para crear un ambiente familiar y acogedor, 
            nuestra propuesta es única y está diseñada para ofrecerte una experiencia diferente y personalizada.</p>
          <h3>¿Cómo puedo buscar películas en su plataforma?</h3>
          <p>Puedes buscar películas utilizando la barra de búsqueda en la parte superior de la página. 
            Simplemente ingresa el título de la película, el nombre del director o el género que te interese, y te mostraremos una lista de opciones disponibles.</p>
          <h3>¿Puedo filtrar las películas por género o año?</h3>
          <p>Sí, nuestra plataforma te permite filtrar las películas por género, año de estreno y calificación. 
            Utiliza los filtros disponibles en la barra lateral para encontrar fácilmente las películas que se ajusten a tus preferencias.</p>
        </section>
      </div>
    </Main>

  );
};

export default About