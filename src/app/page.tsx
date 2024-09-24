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
    <div className={styles.page}>
      <h1>Películas Populares</h1>
      <div className={styles['carousel-container']}>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
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
    </div>
  );
}