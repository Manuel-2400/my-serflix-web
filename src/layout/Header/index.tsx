import React from "react";
import Link from "next/link";
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">SerFlix</a>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link href="#now-playing" className="nav-link">Cartelera</Link>
          </li>
          <li>
            <Link href="#genres" className="nav-link">Generos</Link>
          </li>
          <li>
            <Link href="#popular" className="nav-link">Populares</Link>
          </li>
          <li>
            <Link href="#rated" className="nav-link">Mejores Calificados</Link>
          </li>
          <li>
            <Link href="#soon" className="nav-link">Proximamente</Link>
          </li>
        </ul>
        <Link href="/iniciar-sesion" className="nav-link">Iniciar sesion</Link>
      </nav>
    </header>
  );
};
