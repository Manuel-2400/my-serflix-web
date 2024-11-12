"use client";

import { useEffect, useState } from 'react';
import { Main } from '@/layout/Main/main';
import { Popover, Button, Typography } from '@mui/material';
import './genres.css';

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genre_ids: number[];
};

type Video = {
  key: string;
  type: string;
};

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [moviesByGenre, setMoviesByGenre] = useState<{ [key: number]: Movie[] }>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedTrailer, setSelectedTrailer] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES`);
        const data = await response.json();
        setGenres(data.genres);

        // Cargar películas para cada género
        const genreMovies: { [key: number]: Movie[] } = {};
        await Promise.all(
          data.genres.map(async (genre: Genre) => {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=49c9cb85300478a6d4052f8f18f2045f&with_genres=${genre.id}&sort_by=popularity.desc&language=es-ES`);
            const movieData = await movieResponse.json();
            genreMovies[genre.id] = movieData.results;
          })
        );
        setMoviesByGenre(genreMovies);
      } catch (error) {
        console.error("Error fetching genres or movies:", error);
      }
    };
    fetchGenres();
  }, []);

  const fetchTrailer = async (movie: Movie, event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setSelectedMovie(movie);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES`);
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
      <div className="genres-container">
        {genres.map((genre) => (
          <div key={genre.id} className="genre-section">
            <h2>{genre.name}</h2>
            <div className="movies-list">
              {moviesByGenre[genre.id]?.map((movie) => (
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
        ))}
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
              <Typography variant="subtitle2" gutterBottom>Géneros: 
                {selectedMovie.genre_ids.map(id => 
                  genres.find(g => g.id === id)?.name
                ).join(', ')}
              </Typography>
            </>
          )}
        </div>
      </Popover>
    </Main>
  );
};

export default Genres;
