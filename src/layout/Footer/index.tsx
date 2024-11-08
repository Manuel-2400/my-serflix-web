import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4 className="footer-title">Nosotros</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Términos</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Términos y Condiciones</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-title">Desarrolladores</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Manuel</a></li>
            <li><a href="#" className="footer-link">Daniel</a></li>
            <li><a href="#" className="footer-link">Manuela</a></li>
          </ul>
          <div className="footer-social">
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
            <a href="#" className="social-link"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      {/* <div className="footer-subscribe">
        <h4 className="subscribe-title">Mantente al día</h4>
        <form className="subscribe-form">
          <input type="email" placeholder="Correo electrónico" className="subscribe-input" />
          <button type="submit" className="subscribe-button">Suscribirme</button>
        </form>
      </div> */}
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2024 SerFlix</p>
      </div>
    </footer>
  );
};
