import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  trailer: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true }
});

export const Movie = model('Movie', movieSchema);