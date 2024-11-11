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
            <li><Link href="#" className="footer-link">Sobre Nosotros</Link></li>
            <li><Link href="#" className="footer-link">Nuestro Equipo</Link></li>
            <li><Link href="#" className="footer-link">Carreras</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Términos</h4>
          <ul className="footer-list">
            <li><Link href="#" className="footer-link">Términos y Condiciones</Link></li>
            <li><Link href="#" className="footer-link">Política de Privacidad</Link></li>
            <li><Link href="#" className="footer-link">Política de Cookies</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-list">
            <li><Link href="#" className="footer-link">Contacto</Link></li>
            <li><Link href="#" className="footer-link">Soporte</Link></li>
            <li><Link href="#" className="footer-link">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Desarrolladores</h4>
          <ul className="footer-list">
            <li><Link href="#" className="footer-link">Manuel</Link></li>
            <li><Link href="#" className="footer-link">Daniel</Link></li>
            <li><Link href="#" className="footer-link">Manuela</Link></li>
          </ul>
          <div className="footer-social">
            <Link href="#" className="social-link"><i className="fab fa-github"></i></Link>
            <Link href="#" className="social-link"><i className="fab fa-twitter"></i></Link>
            <Link href="#" className="social-link"><i className="fab fa-linkedin"></i></Link>
          </div>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 SerFlix</p>
    </footer>
  );
};
