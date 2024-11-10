import React from 'react';
/*import './footer.css';*/

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Nosotros</h4>
            <ul>
              <li><a href="aboutUs.tsx">Sobre Nosotros</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Términos</h4>
            <ul>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Desarrolladores</h4>
            <ul>
              <li><a href="#">Manuel</a></li>
              <li><a href="#">Daniel</a></li>
              <li><a href="#">Manuela</a></li>
            </ul>
            <div className="social-links">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="subscribe-form">
              <h4>Mantente al día</h4>
              <form>
                <input type="email" placeholder="Correo electrónico" />
                <button type="submit">Suscribirme</button>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright">
              &copy; 2024 SerFllix
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
