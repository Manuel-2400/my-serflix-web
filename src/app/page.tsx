"use client";

import { Main } from "@/layout/Main/main";
import './body.css'
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";


export default function Home() {
  const { isLoggedIn, logout, login } = useAuth()
  return (
    <Main>
      {isLoggedIn ?

        <section>
          No estas logeado
          <Button onClick={logout}>Logearte</Button>
        </section>
        :
        <section>
          Estas logeado
          <Button onClick={login}>Salirte</Button>

          {/* Banner principal */}
      <section className="banner">
        <div className="banner-text">
          <p>12/11/2024</p>
          <h2>Tu próxima película está a solo una búsqueda de distancia</h2>
          <input type="text" placeholder="Buscar" />
        </div>
        <div className="banner-image">
          {/* Contenedor para imagen */}
        </div>
      </section>

      {/* Cartelera */}
      <section className="cartelera-section">
        <h2>Cartelera</h2>
        <div className="cartelera-items">
          {/* Aquí agregar cada película */}
        </div>
        <button className="more-movies-btn">Más películas</button>
      </section>

      {/* Contenido Popular */}
      <section className="popular-content-section">
        <h2>Contenido Más Popular De La Semana</h2>
        <p>Obtén acceso exclusivo a lanzamientos anticipados...</p>
        <button>Ir a más populares</button>
      </section>

      {/* Mejores Calificados */}
      <section className="top-rated-section">
        <h2>Mejores Calificados</h2>
        <div className="top-rated-items">
          {/* Aquí agregar cada contenido */}
        </div>
        <button className="more-movies-btn">Más películas</button>
      </section>

      {/* Próximamente */}
      <section className="coming-soon-section">
        <h2>Próximamente</h2>
        <div className="coming-soon-items">
          {/* Aquí agregar cada película próxima */}
        </div>
        <button className="more-movies-btn">Más películas</button>
      </section>

        </section>
      }
    </Main>
  );
}