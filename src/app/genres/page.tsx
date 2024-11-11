"use client";

import { Main } from '@/layout/Main/main';
import './genres.css';
import Image from 'next/image';
import image from '../../img/img-Daniel.jpg';
import { useEffect, useState } from 'react';

const genreDescriptions = {
  Action: 'Siente la adrenalina con películas de acción.',
  Adventure: 'Explora nuevas aventuras llenas de emoción.',
  Animation: 'Disfruta de las mejores películas animadas.',
  Comedy: 'Diviértete con las mejores películas de risa.',
  Crime: 'Sumérgete en el mundo del crimen y la investigación.',
  Documentary: 'Aprende con fascinantes documentales sobre diversos temas.',
  Drama: 'Emocionate con historias dramáticas e intensas.',
  Family: 'Películas perfectas para disfrutar en familia.',
  Fantasy: 'Adéntrate en mundos fantásticos llenos de magia.',
  History: 'Revive momentos históricos a través del cine.',
  Horror: 'Sumérgete en el mundo del miedo y los sustos.',
  Music: 'Disfruta de las mejores historias musicales.',
  Mystery: 'Resuelve los enigmas en este género de misterio.',
  Romance: 'Vive las historias de amor más conmovedoras.',
  ScienceFiction: 'Explora el futuro con las mejores películas de ciencia ficción.',
  TVMovie: 'Disfruta de películas hechas para la televisión.',
  Thriller: 'Siente la tensión con películas de suspenso.',
  War: 'Revive los momentos más intensos de la guerra.',
  Western: 'Sumérgete en el salvaje oeste con los mejores westerns.',
};

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres from TMDB API
    const fetchGenres = async () => {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY');
      const data = await response.json();
      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  return (
    <Main>
      <section className="genres-container">
        {/* {genres.map((genre) => (
          // <div key={genre.id} className="genre-block">
          //   <Image width={300} height={300} src={image} alt={genre.name} className="genre-image" />
          //   <h3 className="genre-title">{genre.name}</h3>
          //   <p className="genre-description">{genreDescriptions[genre.name] || 'Descripción no disponible.'}</p>
            // <button className="explore-button">Explorar</button>
          // </div> 
        ))} */}
      </section>
    </Main>
  );
};

export default Genres;
