/* eslint-disable @next/next/no-img-element */
"use client";

import { Main } from "@/layout/Main/main";
import './body.css'
import './../app/Contact/contact.css';
import { useAuthContext } from "@/context/AuthContext";
import { useState, useEffect, FormEvent } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@mui/material';
import imageControl from './../img/img-controlTv.jpg';
import imageStart from './../img/img-Start.jpg';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function Home() {
  const { isLoggedIn } = useAuthContext();

  // Estado para las películas en cartelera
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para los resultados de búsqueda
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // Fetch de las películas en cartelera
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES&page=1`
        );
        const data = await response.json();
        setNowPlayingMovies(data.results.slice(0, 8)); // Solo toma las primeras 8 películas
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES&query=${e.target.value}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.target as HTMLFormElement)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const result = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    }).then((response) => response.json());

    console.log(result);

  }

  return (
    <Main>
      {isLoggedIn ? (
        <section className="YourLogin">

          <section className="banner">
            <div className="banner-text">
              <h2>Tu próxima película está a solo una búsqueda de distancia</h2>
              <input
                className="search"
                type="text"
                placeholder="Buscar"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="banner-image">
              <Image width={350} height={350} src={imageControl} alt="Control" />
            </div>
          </section>

          <section className="cartelera-section">
            <h2>Cartelera</h2>
            <div className="cartelera-items">
              {(searchTerm ? searchResults : nowPlayingMovies).map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <div className="movie-title">{movie.title}</div>
                </div>
              ))}
            </div>
            <Link href="/billboard">
              <Button variant="contained" className="more-movies-btn">
                Más películas
              </Button>
            </Link>
          </section>

          <section className="popular-section">
            <div className="popular-text">
              <h2>Contenido Más Popular</h2>
              <p>Obtén acceso exclusivo a lanzamientos anticipados...</p>
              <Link href="/popular">
                <button>Ir a más populares</button>
              </Link>
            </div>
            <div className="image-popular">
              <Image height={300} src={imageStart} alt="Pantalla-Start" />
            </div>
          </section>
        </section>
      ) : (
        <section className="Login">
          <div className="wrapper">
            <form onSubmit={handleLogin}>
              <h2>Iniciar Sesión</h2>
              <div className="input-field">
                <input name="email" type="text" required />
                <label>Ingresa Tu Correo</label>
              </div>
              <div className="input-field">
                <input name="password" type="password" required />
                <label>Ingresa Tu Contraseña</label>
              </div>
              <button type="submit">Iniciar Sesión</button>
              <div className="register">
                <p>Aún No Tienes Cuenta? <a href="./../register">Regístrate Aquí</a></p>
              </div>
            </form>
          </div>
        </section>
      )}
    </Main>
  );
}