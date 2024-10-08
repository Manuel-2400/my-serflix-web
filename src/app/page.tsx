'use client'

import { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './page.module.css'; // Verifica que este archivo exista
import NowPlaying from './components/NowPlaying';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=49c9cb85300478a6d4052f8f18f2045f')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Hubo un problema con la solicitud Fetch: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <section id="home">
        <header className="main-header">
          <div className="logo">SerFlix</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#now-playing">Cartelera</a></li>
              <li><a href="#popular">Películas Populares</a></li>
              <li><a href="#genres">Géneros</a></li>
              <li><a href="#rated">Mejores Calificados</a></li>     
            </ul>
          </nav>
        </header>
      </section>

      <main>
        <section id="now-playing">
          <NowPlaying movies={movies} /> {/* Pasa las películas como props */}
        </section>

        <section id="popular">
          <h2>Películas Populares</h2>
          <div className={styles['carousel-container']}>
            <Carousel showThumbs={false} autoPlay infiniteLoop showArrows>
              {movies.map(movie => (
                <div key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                  <div className="legend">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        <section id='genres'>
          <div className={styles.page}>
            <h2>Géneros</h2>
          </div>   
        </section>

        <section id='rated'>
          <div className={styles.page}>
            <h2>Mejores Calificados</h2>
          </div>   
        </section>
      </main>

      <footer className="main-footer">
        <a href="#home">Inicio</a>
        <a href="https://www.themoviedb.org/" target="_blank">API Que Usamos</a>
        <a href="https://github.com/Manuel-2400/my-serflix-web" target="_blank">Nuestro Repositorio</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Trabaja Con Nosotros</a>
        <p>Copyright © 2024 SerFlix. All rights reserved.</p>
      </footer>
    </div>
  );
}
