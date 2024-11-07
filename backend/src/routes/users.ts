// PRUEBA DE BACKEND, AUN NO ESTA LISTA
import { Router } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();


// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message:(err as Error).message });
  }
});

export default router;