import React from 'react';
import Link from 'next/link';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4 className="footer-title">Nosotros</h4>
          <ul className="footer-list">
            <li><Link href="/about" className="footer-link">Sobre Nosotros</Link></li>
            <li><Link href="/Developers" className="footer-link">Nuestro Equipo</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" className="footer-link" target="_blank">Trabaja Con Nosotros</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Términos</h4>
          <ul className="footer-list">
          <li><Link href="/Terms" className="footer-link">Términos y Condiciones</Link></li>
            <li><Link href="/privacy" className="footer-link">Política de Privacidad</Link></li>
            <li><Link href="/cookies" className="footer-link">Política de Cookies</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-list">
            <li><Link href="/Contact" className="footer-link">Contacto</Link></li>
            <li><Link href="/support" className="footer-link">Soporte</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Desarrolladores</h4>
          <ul className="footer-list">
            <li><Link href="https://github.com/Profesor-2400" className="footer-link"  target="_blank">Manuel Valenzuela</Link></li>
            <li><Link href="https://github.com/DanielEscobar24" className="footer-link"  target="_blank">Daniel Escobar</Link></li>
            <li><Link href="https://github.com/Manuela-bit" className="footer-link"  target="_blank">Manuela Escobar</Link></li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 SerFlix</p>
    </footer>
  );
};
