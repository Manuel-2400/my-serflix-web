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
            <li><Link href="/about" className="footer-link"><i className="fas fa-info-circle"></i> Sobre Nosotros</Link></li>
            <li><Link href="/Developers" className="footer-link"><i className="fas fa-users"></i> Nuestro Equipo</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D" className="footer-link" target="_blank"><i className="fas fa-briefcase"></i> Trabaja Con Nosotros</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Términos</h4>
          <ul className="footer-list">
            <li><Link href="/Terms" className="footer-link"><i className="fas fa-file-contract"></i> Términos y Condiciones</Link></li>
            <li><Link href="/privacy" className="footer-link"><i className="fas fa-user-secret"></i> Política de Privacidad</Link></li>
            <li><Link href="/cookies" className="footer-link"><i className="fas fa-cookie-bite"></i> Política de Cookies</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-list">
            <li><Link href="https://github.com/Manuel-2400" className="footer-link" target="_blank"><i className="fab fa-github"></i> Manuel Valenzuela</Link></li>
            <li><Link href="https://github.com/DanielEscobar24" className="footer-link" target="_blank"><i className="fab fa-github"></i> Daniel Escobar</Link></li>
            <li><Link href="https://github.com/Manuela-bit" className="footer-link" target="_blank"><i className="fab fa-github"></i> Manuela Escobar</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2024 SerFlix</p>
      </div>
    </footer>
  );
};