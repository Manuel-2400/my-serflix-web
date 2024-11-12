import React from 'react';
import { Header } from "../../layout/Main/subComponents/Header/header";
import { Footer } from "../../layout/Main/subComponents/Footer/footer";
import './terms.css';

const Terms = () => {
  return (
    <div className="terms-and-conditions">
      <Header />      
      <div className="terms-and-conditions">
      <h1>Términos y Condiciones de Uso</h1>
      <p><strong>Última actualización: [12/11/2024]</strong></p>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al utilizar el sitio web de Serflix, usted acepta estos Términos y Condiciones, así como nuestra Política de Privacidad. 
        Si no está de acuerdo con cualquiera de estos términos, no debe utilizar nuestros servicios.
      </p>

      <h2>2. Descripción del Servicio</h2>
      <p>
        Serflix es un motor de búsqueda de películas que permite a los usuarios encontrar información sobre diferentes títulos, 
        incluyendo sinopsis, calificaciones, y enlaces a plataformas de streaming donde se pueden ver. Serflix no proporciona 
        contenido audiovisual directamente y no es responsable de la disponibilidad o calidad del contenido en las plataformas de terceros.
      </p>

      <h2>3. Uso Permitido</h2>
      <p>
        Usted se compromete a utilizar Serflix únicamente con fines legales y de acuerdo con estos Términos y Condiciones. Queda prohibido:
      </p>
      <ul>
        <li>Utilizar el servicio para realizar actividades ilegales o no autorizadas.</li>
        <li>Interferir con el funcionamiento del sitio web o intentar acceder a áreas no autorizadas.</li>
        <li>Utilizar bots, scrapers o cualquier otra herramienta automatizada para acceder a nuestro sitio web sin nuestro consentimiento.</li>
      </ul>

      <h2>4. Propiedad Intelectual</h2>
      <p>
        Todo el contenido disponible en Serflix, incluyendo pero no limitado a texto, gráficos, logotipos, imágenes y software, 
        es propiedad de Serflix o de sus licenciantes y está protegido por las leyes de propiedad intelectual. 
        No se permite la reproducción, distribución o modificación del contenido sin el permiso expreso de Serflix.
      </p>

      <h2>5. Enlaces a Terceros</h2>
      <p>
        Serflix puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de estos sitios. 
        Al utilizar Serflix, usted acepta que no seremos responsables de ningún daño o pérdida causada por el uso de dichos sitios web.
      </p>

      <h2>6. Limitación de Responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, Serflix no será responsable de ningún daño directo, indirecto, incidental, 
        especial o consecuente que surja del uso o la incapacidad de usar nuestro servicio, incluyendo la información proporcionada sobre películas y enlaces a plataformas de streaming.
      </p>

      <h2>7. Modificaciones a los Términos</h2>
      <p>
        Serflix se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio será 
        efectivo inmediatamente después de su publicación en el sitio web. Su uso continuado del servicio después de la publicación 
        de cambios constituye su aceptación de los nuevos términos.
      </p>

      <h2>8. Ley Aplicable</h2>
      <p>
        Estos Términos y Condiciones se rigen por las leyes del [país o estado]. Cualquier disputa que surja en relación con estos 
        términos se resolverá en los tribunales competentes de [ubicación].
      </p>

      <h2>9. Contacto</h2>
      <p>
        Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos a través de [serFlix@serFlix.com].
      </p>
    </div>

      <Footer />
    </div>
  );
};

export default Terms