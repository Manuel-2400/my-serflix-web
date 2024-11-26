import React from 'react';
import './cookies.css';
import { Main } from '@/layout/Main/main';

const Cookies = () => {
  return (
    <Main >
      <div className="cookies">
        <h1>Política de Cookies</h1>
        <p><strong>Última actualización: [26/11/2024]</strong></p>

        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil)
          cuando visita un sitio web. Estas cookies permiten al sitio web recordar su actividad y preferencias
          (como el inicio de sesión, el idioma, el tamaño de la fuente y otras preferencias de visualización)
          durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que regrese al sitio
          o navegue por sus páginas.
        </p>

        <h2>2. ¿Qué Cookies Utilizamos?</h2>
        <p>
          En Serflix, utilizamos diferentes tipos de cookies para mejorar su experiencia en nuestro sitio:
        </p>
        <ul>
          <li><strong>Cookies necesarias:</strong> Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.</li>
          <li><strong>Cookies de rendimiento:</strong> Estas cookies nos permiten contar las visitas y las fuentes de tráfico, para poder medir y mejorar el rendimiento de nuestro sitio.</li>
          <li><strong>Cookies de funcionalidad:</strong> Estas cookies permiten que el sitio web ofrezca funciones mejoradas y personalización.</li>
          <li><strong>Cookies de publicidad:</strong> Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por estas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes en otros sitios.</li>
        </ul>

        <h2>3. Cómo Puede Gestionar las Cookies</h2>
        <p>
          Puede gestionar las cookies a través de la configuración de su navegador. La mayoría de los navegadores le permiten:
        </p>
        <ul>
          <li>Ver las cookies que tiene en su dispositivo.</li>
          <li>Eliminar cookies existentes.</li>
          <li>Bloquear cookies de todos los sitios o de ciertos sitios.</li>
          <li>Recibir una advertencia antes de que se almacene una cookie.</li>
        </ul>
        <p>
          Sin embargo, tenga en cuenta que si bloquea las cookies, es posible que no pueda acceder a algunas partes de nuestro sitio web.
        </p>

        <h2>4. Cambios a esta Política de Cookies</h2>
        <p>
          Serflix se reserva el derecho de modificar esta Política de Cookies en cualquier momento. Cualquier cambio será
          efectivo inmediatamente después de su publicación en el sitio web. Su uso continuado del servicio después de la publicación de cambios
          constituye su aceptación de la nueva política.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Cookies, por favor contáctenos a través de [serFlix@serFlix.com].
        </p>
      </div>

    </Main>
  );
};

export default Cookies