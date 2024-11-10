import React from "react";
import Link from "next/link";
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">SerFlix</a>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link href="#now-playing" legacyBehavior>
              <a className="nav-link">Cartelera</a>
            </Link>
          </li>
          <li>
            <Link href="#genres" legacyBehavior>
              <a className="nav-link">Generos</a>
            </Link>
          </li>
          <li>
            <Link href="#popular" legacyBehavior>
              <a className="nav-link">Populares</a>
            </Link>
          </li>
          <li>
            <Link href="#rated" legacyBehavior>
              <a className="nav-link">Mejores Calificados</a>
            </Link>
          </li>
          <li>
            <Link href="#soon" legacyBehavior>
              <a className="nav-link">Proximamente</a>
            </Link>
          </li>
        </ul>
        <Link href="/iniciar-sesion" legacyBehavior>
          <a className="nav-link login">Iniciar sesión</a>
        </Link>
      </nav>
    </header>
  );
};