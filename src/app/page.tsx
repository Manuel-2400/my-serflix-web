"use client";

import { Main } from "@/layout/Main/main";
import './body.css'
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@mui/material";


export default function Home() {
  const { isLoggedIn, logout, login } = useAuth()
  return (
    <Main>
      {isLoggedIn ?
        <section className="Login">
          <div className="wrapper">
            <form action="#">
              <h2>Login</h2>
              <div className="input-field">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Enter your password</label>
              </div>
              <button type="submit" onClick={logout}>Log In</button>
              <div className="register">
                <p>Dont have an account? <a href="#">Register</a></p>
              </div>
            </form>
          </div>
        </section>
        :
        <section className="YourLogin">
          Estas logeado
          <Button onClick={login}>Salirte</Button>
        </section>
      }
    </Main>
  );
}