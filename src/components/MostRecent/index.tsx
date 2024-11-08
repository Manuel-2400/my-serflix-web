/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { CardwithImage } from "../Card";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

export const Genres = () => {
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
        <>
            {movies.map(movie => (
                <CardwithImage
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    title={movie.title}
                    text={movie.overview}
                />
            ))}
        </>
    )
} 