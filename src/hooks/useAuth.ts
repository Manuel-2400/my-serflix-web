// hooks/useAuth.js
import { useState, useEffect } from 'react';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Al cargar el hook, se lee el estado de login de localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  // Función para simular el login y actualizar localStorage
  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  // Función para simular el logout y actualizar localStorage
  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  // El hook devuelve el estado de login y las funciones para cambiarlo
  return { isLoggedIn, login, logout };
}
