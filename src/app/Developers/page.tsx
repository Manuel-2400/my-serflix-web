import React from 'react';
import './developers.css';
import ImageDani from './../../img/img-Daniel.jpg';
import { Main } from '@/layout/Main/main';
import Image from 'next/image';

const Developer = () => {
  const teamMembers = [
    {
      nombre: 'Daniel Angel Escobar',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'ImageDani.jpg',
    },
    {
      nombre: 'Manuela Escobar',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'ImageManuela.jpg',
    },
    {
      nombre: 'Manuel Valenzuela',
      descripcion: 'Todo empieza con una idea. Tal vez quieras comenzar un negocio o convertir un pasatiempo en algo más...',
      imagen: 'ImageManuel.jpg',
    },
  ];

  return (
    <Main>
      <div className="equipo-page">
        {/* Título */}
        <section className="header">
          <h1>Nuestro equipo</h1>
        </section>
        {/* Lista de miembros del equipo */}
        <section className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <Image width={350} height={350} src={ImageDani} alt="Control" />
              <h3>{member.nombre}</h3>
              <p>{member.descripcion}</p>
            </div>
          ))}
        </section>
      </div>
    </Main>
  );
};

export default Developer