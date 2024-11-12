"use client";

import { Main } from "@/layout/Main/main";
import './body.css'
import './../app/Contact/contact.css';
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@mui/material';
import imageCinema from './../img/img-controlTv.jpg';
import imageStart from './../img/img-Start.jpg';

// type Movie = {
//   id: number;
//   title: string;
//   poster_path: string;
// };

export default function Home() {
  const { isLoggedIn, login } = useAuthContext();

  // // Mover el estado ahora al componente principal
  // const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  // // Fetch de las películas ahora en el componente principal
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/now_playing?api_key=49c9cb85300478a6d4052f8f18f2045f&language=es-ES&page=1`
  //       );
  //       const data = await response.json();
  //       setNowPlayingMovies(data.results.slice(0, 8)); // Solo toma las primeras 8 películas
  //     } catch (error) {
  //       console.error("Error fetching movies:", error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  return (
    <Main>
      {isLoggedIn ? (
        <section className="YourLogin">

          <section className="banner">
            <div className="banner-text">
              <h2>Tu próxima película está a solo una búsqueda de distancia</h2>
              <input type="text" placeholder="Buscar" />
            </div>
            <div className="banner-image">
              <Image width={350} height={350} src={imageCinema} alt="Control" />
            </div>
          </section>

          <section className="cartelera-section">
            <h2>Cartelera</h2>
            {/* <div className="cartelera-items">
              {nowPlayingMovies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <div className="movie-title">{movie.title}</div>
                </div>
              ))}
            </div> */}
            <Link href="/billboard">
              <Button variant="contained" color="primary" className="more-movies-btn">
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
            <form action="#">
              <h2>Iniciar Sesión</h2>
              <div className="input-field">
                <input type="text" required />
                <label>Ingresa Tu Correo</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Ingresa Tu Contraseña</label>
              </div>
              <button type="submit" onClick={login}>Iniciar Sesión</button>
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
