'use client'
import React, { useState } from "react";
import Link from "next/link";
import './header.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link href="/" className="logo">SerFlix</Link>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link href="./../billboard" className="nav-link">Cartelera</Link></li>
          <li><Link href="./../genres" className="nav-link">Géneros</Link></li>
          <li><Link href="./../popular" className="nav-link">Populares</Link></li>
        </ul>
        {/* <Link href="/iniciar-sesion" className="nav-link login">Iniciar sesión</Link> */}
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};
