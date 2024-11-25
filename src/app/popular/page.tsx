/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from 'react';
import { Main } from '@/layout/Main/main';
import { Popover, Button, Typography } from '@mui/material';
import './popular.css';


type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
};

type Video = {
  key: string;
  type: string;
};

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES&page=1`
        );
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const fetchTrailer = async (movie: Movie, event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedMovie(movie);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES`
      );
      const data = await response.json();

      const trailer = data.results.find((video: Video) => video.type === 'Trailer');
      setSelectedTrailer(trailer ? trailer.key : null);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedMovie(null);
    setSelectedTrailer(null);
  };

  return (
    <Main>
      <section className='Popular'>
        <div className="genres-container">
          <h2>Películas Más Populares - Mejores Votadas</h2>
          <div className="movies-list">
            {popularMovies
              .sort((a, b) => b.vote_average - a.vote_average) // Ordena por vote_average
              .map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <div className="movie-overlay">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(event) => fetchTrailer(movie, event)}
                    >
                      Ver más
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          PaperProps={{
            style: {
              width: '80vw',  
              height: '70vh', 
              maxWidth: '800px', 
              padding: '20px', 
              overflowY: 'auto', 
              borderRadius: '8px', 
              backgroundColor: 'transparent', 
              boxShadow: 'none', 
            },
          }}
        >
          <div className="popover-content">
            {selectedTrailer && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${selectedTrailer}`}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {selectedMovie && (
              <>
                <Typography variant="h6" gutterBottom>{selectedMovie.title}</Typography>
                <Typography variant="body2" gutterBottom>{selectedMovie.overview}</Typography>
                <Typography variant="subtitle2" gutterBottom>Voto: {selectedMovie.vote_average}</Typography>
              </>
            )}
          </div>
        </Popover>

      </section>
    </Main>
  );
};

export default PopularMovies;