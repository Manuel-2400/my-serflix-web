"use client";

import { Main } from "@/layout/Main/main";
import './body.css'
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function Home() {
  const { isLoggedIn, logout, login } = useAuth()
  return (
    <Main>
      {isLoggedIn ?
        <section className="YourLogin">
          Bienvanido aqui a esta sitio tatata
        </section>
        :
        <section className="Login">
        <div className="wrapper">
          <form action="#">
            <h2>Iniciar sesion</h2>
            <div className="input-field">
              <input type="text" required />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required />
              <label>Enter your password</label>
            </div>
            <button type="submit" onClick={login}>iniciar sesion</button>
            <div className="register">
              <p>Dont have an account? <a href="./../register">Register</a></p>
            </div>
          </form>
        </div>
      </section>
      }
    </Main>
  );
}