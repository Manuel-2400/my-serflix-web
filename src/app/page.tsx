"use client";

import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './page.module.css';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  trailer_url: string | null; // Añade esta propiedad para la URL del tráiler
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [currentTrailer, setCurrentTrailer] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=49c9cb85300478a6d4052f8f18f2045f&page=1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const moviePromises = data.results.map((movie: Movie) =>
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=49c9cb85300478a6d4052f8f18f2045f`)
            .then(response => response.json())
            .then(videoData => {
              const trailer = videoData.results.find((video: Video) => video.type === 'Trailer' && video.site === 'YouTube');
              return {
                ...movie,
                trailer_url: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null
              };
            })
        );

        const moviesWithTrailers = await Promise.all(moviePromises);

        // Filtra las películas para omitir una película específica por su título
        const filteredMovies = moviesWithTrailers.filter(movie => movie.title !== 'Heavenly Touch');

        setMovies(filteredMovies); // Save the data in the state
      } catch (error) {
        if (error instanceof Error) {
          setError(error); // Save the error in the state
        } else {
          setError(new Error('An unknown error occurred')); // Handle unknown errors
        }
      }
    };

    fetchMovies();
  }, []);

  const playTrailer = (trailerUrl: string | null) => {
    if (trailerUrl) {
      setCurrentTrailer(trailerUrl);
    }
  };

  if (error) {
    return <div>Hubo un problema con la solicitud Fetch: {error.message}</div>;
  }

  if (movies.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles['carousel-container']}>
            <h1>Películas Populares</h1>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
              {movies.map(movie => (
                <div key={movie.id} className={styles['carousel-item']}>
                  {currentTrailer === movie.trailer_url ? (
                    <div className={styles['iframe-container']}>
                      <iframe
                        width="560"
                        height="315"
                        src={movie.trailer_url || ''}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <>
                      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                      <div className={styles['play-button']} onClick={() => playTrailer(movie.trailer_url)}>
                        ▶
                      </div>
                      <div className="legend">
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </Carousel>
          </div>

          <div className={styles['movie-section']}>
            <h2>Películas Populares</h2>
            <div className={styles['movie-cards']}>
              {movies.map(movie => (
                <div key={movie.id} className={styles['movie-card']} onClick={() => playTrailer(movie.trailer_url)}>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                  <div className={styles['movie-card-details']}>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Puedes agregar más secciones de películas aquí */}
        </main>
      </div>
      <Footer />
    </>
  );
}