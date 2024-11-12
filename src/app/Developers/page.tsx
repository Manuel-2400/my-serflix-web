"use client";
import React from 'react';
import './developers.css'; // Asegúrate de que esta ruta sea correcta
import ImageDani from './../../img/img-Daniel.jpg';
import ImageManuela from './../../img/img-Manuela.jpg';
import ImageManuel from './../../img/img-Manuel.jpg';
import { Main } from '@/layout/Main/main';
import Image from 'next/image';

const Developer = () => {
  const teamMembers = [
    {
      nombre: 'Daniel Angel Escobar',
      descripcion: 'Desarrollador Front-End, Gerente de Desarrollo',
      imagen: ImageDani,
    },
    {
      nombre: 'Manuela Escobar',
      descripcion: 'Desarrolladora Back-End, Gerente de RRHH',
      imagen: ImageManuela,
    },
    {
      nombre: 'Manuel Valenzuela',
      descripcion: 'Desarrollador Front-End, Gerente de Asuntos Internos',
      imagen: ImageManuel,
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
              <Image 
                width={500} 
                height={350} 
                src={member.imagen} 
                alt={member.nombre} 
                style={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área
              />
              <h3>{member.nombre}</h3>
              <p>{member.descripcion}</p>
            </div>
          ))}
        </section>
      </div>
    </Main>
  );
};

export default Developer;