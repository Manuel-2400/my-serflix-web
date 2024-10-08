// backend/src/routes/movies.ts
import { Router } from 'express';
import { Movie } from '../models/movie';

const router = Router();

// Obtener todas las películas
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Crear una nueva película
router.post('/', async (req, res) => {
  const movie = new Movie({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    rating: req.body.rating,
    trailer: req.body.trailer,
    releaseDate: req.body.releaseDate,
    genre: req.body.genre
  });

  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default router;