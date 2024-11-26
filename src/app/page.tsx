"use client";

// Importaciones necesarias
import { Main } from "@/layout/Main/main"; // Importa el componente Main
import './body.css'; // Importa los estilos CSS para el cuerpo
import './../app/Contact/contact.css'; // Importa los estilos CSS para la página de contacto
import { useAuthContext } from "@/context/AuthContext"; // Importa el contexto de autenticación
import { useState, useEffect, FormEvent } from 'react'; // Importa hooks de React
import Image from "next/image"; // Importa el componente de imagen de Next.js
import Link from 'next/link'; // Importa el componente de enlace de Next.js
import { Button } from '@mui/material'; // Importa el componente de botón de Material-UI
import imageControl from './../img/img-controlTv.jpg'; // Importa una imagen
import imageStart from './../img/img-Start.jpg'; // Importa otra imagen

// Definición del tipo Movie
type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

// Componente principal Home
export default function Home() {
  // Uso del contexto de autenticación
  const { isLoggedIn, login } = useAuthContext();

  // Estados para manejar las películas, búsqueda y mensajes de error
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch de las películas en cartelera al montar el componente
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

  // Función para manejar la búsqueda de películas
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

  // Función para manejar el inicio de sesión
  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('Formulario enviado'); // Verifica que el evento de submit se está ejecutando

    const formData = new FormData(event.target as HTMLFormElement);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Realiza una solicitud HTTP al endpoint de inicio de sesión
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST', // Especifica que la solicitud es de tipo POST
      headers: myHeaders, // Incluye los encabezados de la solicitud
      body: JSON.stringify({
        email: formData.get('email'), // Convierte los datos del formulario a una cadena JSON
        password: formData.get('password'),
      }),
    });

    // Verifica el estado de la respuesta HTTP
    if (response.ok) {
      const result = await response.json(); // Procesa la respuesta de la solicitud y la convierte a un objeto JSON
      console.log('Respuesta del servidor:', result); // Verifica la respuesta del servidor
      login(); // Actualiza el estado de autenticación
      localStorage.setItem('isLoggedIn', 'true'); // Actualiza el valor en el localStorage

      // // Verifica si la respuesta contiene los datos esperados
      // if (result.email && result.id) {
      //   console.log('Es un login'); // Imprime el mensaje en la consola
      // } else {
      //   console.log('Error en el login'); // Imprime un mensaje de error en la consola
      //   setErrorMessage('Usuario o contraseña incorrectos');
      // }
    } else {
      console.log('Error en la solicitud HTTP:', response.status); // Imprime el estado de la respuesta HTTP en la consola
      setErrorMessage('Error en la solicitud HTTP');
    }
  }

  return (
    <Main>
      {isLoggedIn ? (
        <section className="YourLogin">

          {/* Sección del banner */}
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

          {/* Sección de cartelera */}
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

          {/* Sección de contenido popular */}
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
              {errorMessage && <p className="error-message">{errorMessage}</p>}
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