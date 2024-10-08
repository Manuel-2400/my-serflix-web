import React from 'react';
import styles from './NowPlaying.module.css'; // Importamos los estilos como un objeto

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface NowPlayingProps {
  movies: Movie[];
}

const NowPlaying: React.FC<NowPlayingProps> = ({ movies }) => {
  const today = new Date('2024-10-08');
  
  // Filtro de películas que están en cartelera (dentro de un mes)
  const nowPlayingMovies = movies.filter(movie => {
    const releaseDate = new Date(movie.release_date);
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    return releaseDate >= oneMonthAgo && releaseDate <= today;
  });

  if (nowPlayingMovies.length === 0) {
    return <div>No hay películas en cartelera en este momento.</div>;
  }

  return (
    <div className={styles['now-playing']}>
      <h2 className={styles['now-playing__title']}>En Cartelera</h2>
      <div className={styles['now-playing__movies']}>
        {nowPlayingMovies.map(movie => (
          <div className={styles['now-playing__movie']} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className={styles['now-playing__movie-poster']}
            />
            <h3 className={styles['now-playing__movie-title']}>{movie.title}</h3>
            <p className={styles['now-playing__movie-release-date']}>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowPlaying;
