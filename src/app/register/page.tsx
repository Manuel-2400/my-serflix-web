"use client";

// Importaciones necesarias
import { Main } from "@/layout/Main/main"; // Importa el componente Main
import './register.css'; // Importa los estilos CSS para el registro
import { FormEvent } from "react"; // Importa el tipo FormEvent de React

const Register = () => {
    // Función para manejar el registro de usuarios
    const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página)
        event.stopPropagation(); // Detiene la propagación del evento

        // Crea un objeto FormData a partir del formulario enviado
        const formData = new FormData(event.target as HTMLFormElement);

        // Crea un objeto Headers para incluir los encabezados de la solicitud
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Realiza una solicitud HTTP al endpoint de registro
        const result = await fetch('http://localhost:8000/sign-up', {
            method: 'POST', // Especifica que la solicitud es de tipo POST
            headers: myHeaders, // Incluye los encabezados de la solicitud
            body: JSON.stringify({
                email: formData.get('email'), // Convierte los datos del formulario a una cadena JSON
                password: formData.get('password'),
            }),
        }).then((response) => response.json()); // Procesa la respuesta de la solicitud y la convierte a un objeto JSON

        console.log(result); // Imprime el resultado de la solicitud en la consola
    };

    return (
        <Main>
            <section className="Register">
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
};

export default Register;