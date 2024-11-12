'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './header.css';
import { Button } from "@mui/material";
import { useAuthContext } from "@/context/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { isLoggedIn, logout } = useAuthContext();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="logo">SerFlix</Link>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link href="/billboard" className={`nav-link ${pathname === '/billboard' ? 'active' : ''}`}>Cartelera</Link></li>
          <li><Link href="/genres" className={`nav-link ${pathname === '/genres' ? 'active' : ''}`}>Géneros</Link></li>
          <li><Link href="/popular" className={`nav-link ${pathname === '/popular' ? 'active' : ''}`}>Populares</Link></li>
          {isLoggedIn ? (
            <li><Button className="nav-link" onClick={logout}>Salir</Button></li>
          ) : (
            <li><Button className="nav-link" href="/login">Login</Button></li>
          )}
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
      </button>
    </header>
  );
};