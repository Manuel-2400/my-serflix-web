"use client";

import { Main } from "@/layout/Main/main";
import './register.css'

const Register = () => {
    return (
        <Main>
            <section className="Register" >
                <div className="wrapper">
                    <form action="#">
                        <h2>Registrate</h2>
                        <div className="input-field">
                            <input type="text" required />
                            <label>Enter your email</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required />
                            <label>Enter your password</label>
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