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

        <section>
          No estas logeado
          <Button onClick={logout}>Logearte</Button>
        </section>
        :
        <section>
          Estas logeado
          <Button onClick={login}>Salirte</Button>

        </section>
      }
    </Main>
  );
}