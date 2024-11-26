"use client";

import { Main } from "@/layout/Main/main";
import './register.css'
import { FormEvent } from "react";

const Register = () => {
    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const formData = new FormData(event.target as HTMLFormElement)

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const result = await fetch('http://localhost:8000/sign-up', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        }).then((response) => response.json());

        console.log(result);

    }


    return (
        <Main>
            <section className="Register" >
                <div className="wrapper">
                    <form onSubmit={handleSignUp}>
                        <h2>Registrate</h2>
                        <div className="input-field">
                            <input name="email" type="text" required />
                            <label>Ingrese Su Correo</label>
                        </div>
                        <div className="input-field">
                            <input name="password" type="password" required />
                            <label>Ingresa Su Contraseña</label>
                        </div>
                        <button type="submit">Crear cuenta</button>
                    </form>
                </div>
                <div className="invite-text">
                    <h1 className="invite-heading">¡Crea una cuenta y únete a nuestra comunidad!</h1>
                    <h3 className="invite-subheading">Es rápido y fácil, no te lo pierdas.</h3>
                </div>
            </section>
        </Main>
    );
}

export default Register