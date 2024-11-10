import React from 'react';
import { Header } from "../../layout/Main/subComponents/Header/header";
import { Footer } from "../../layout/Main/subComponents/Footer/footer";
import './developers.css';

export const Developer: React.FC = () => {
  const teamMembers = [
    {
      nombre: 'Daniel Angel Escobar',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'img-Daniel.png', 
    },
    {
      nombre: 'Nombre Apellidos',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'persona2.png',
    },
    {
      nombre: 'Nombre Apellidos',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'persona3.png',
    },
  ];

  return (
    <div className="equipo-page">
      {/* Título */}
      <section className="header">
        <h1>Nuestro equipo</h1>
      </section>

      {/* Lista de miembros del equipo */}
      <section className="team-list">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.imagen} alt={`${member.nombre}`} />
            <h3>{member.nombre}</h3>
            <p>{member.descripcion}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
