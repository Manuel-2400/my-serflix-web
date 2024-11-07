//PRUEBA DE BACKEND, AUN NO ESTA LISTA
import express from 'express';
import mongoose from 'mongoose';
import moviesRouter from './routes/movies';
import usersRouter from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/movie-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});