"use client";

import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './page.module.css';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
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
        return response.json(); // Convert the response to JSON
      })
      .then(data => {
        setMovies(data.results); // Save the data in the state
      })
      .catch(error => {
        setError(error); // Save the error in the state
      });
  }, []);

  if (error) {
    return <div>Hubo un problema con la solicitud Fetch: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <body>
      <section id="home">
        <header className="main-header">
          <div className="logo">
            SerFlix
          </div>
          <nav>
              <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#now-playing">Cartelera</a></li>
                <li><a href="#popular">Peliculas Populares</a></li>
                <li><a href="#genres">Generos</a></li>
                <li><a href="#rated">Mejores Calificados</a></li>     
              </ul>
          </nav>
        </header>
      </section>

        <div className={styles.page}>
          <main>

          <section id='now-playing'>
            <div className={styles.page}>
              <h1>En Cartelera</h1>
            </div>        
          </section>

            
          <section id='popular'>
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
                <h2>Generos</h2>
              </div>   
            </section>

            <section id='rated'>
              <div className={styles.page}>
                <h2>Mejores Calificados</h2>
              </div>   
            </section>

          </main>
        </div>      

      <footer className="main-footer">
        <a href="#home">Inicio</a>
        <a href="https://www.themoviedb.org/" target="_blank">API Que Usamos</a>
        <a href="https://github.com/Manuel-2400/my-serflix-web" target="_blank">Nuestro Repositorio</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Trabaja Con Nosotros</a>
        <a>Copyright © 2024 SerFlix. All rights reserved.</a>
      </footer>


    </body>
    
  );
}