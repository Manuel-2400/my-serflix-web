import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <nav>
      <div className="container">
        <a href="/" className="logo">SerFlix</a>
        <ul className="nav-links">
          <li><Link href="#now-playing">Cartelera</Link></li>
          <li><Link href="#genres">Generos</Link></li>
          <li><Link href="#popular">Populares</Link></li>
          <li><Link href="#rated">Mejores Calificados</Link></li>
          <li><Link href="#soon">Proximamente</Link></li>
          <li><Link href="/iniciar-sesion">Iniciar sesion</Link></li>
        </ul>
      </div>
    </nav>
  );
};
