import React from 'react';
import './privacy.css';
import { Main } from '@/layout/Main/main';

const Policy = () => {
    return (
        <Main >
            <div className="Privacy-Policy">
                <h1>Política de Privacidad</h1>
                <p><strong>Última actualización: [26/11/2024]</strong></p>

                <h2>1. Introducción</h2>
                <p>
                    En Serflix, valoramos su privacidad y nos comprometemos a proteger su información personal. Esta Política de Privacidad describe
                    cómo recopilamos, usamos y compartimos su información cuando utiliza nuestro sitio web.
                </p>

                <h2>2. Información que Recopilamos</h2>
                <p>
                    Podemos recopilar la siguiente información sobre usted:
                </p>
                <ul>
                    <li>Información de contacto, como su nombre y dirección de correo electrónico.</li>
                    <li>Información sobre su uso del sitio, como las páginas que visita y el tiempo que pasa en ellas.</li>
                    <li>Información técnica, como su dirección IP y el tipo de navegador que utiliza.</li>
                </ul>

                <h2>3. Cómo Usamos su Información</h2>
                <p>
                    Utilizamos su información para los siguientes propósitos:
                </p>
                <ul>
                    <li>Para proporcionar y mejorar nuestros servicios.</li>
                    <li>Para comunicarnos con usted sobre su cuenta o servicios.</li>
                    <li>Para analizar el uso del sitio y mejorar nuestra oferta.</li>
                </ul>

                <h2>4. Compartición de su Información</h2>
                <p>
                    No compartimos su información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul>
                    <li>Con su consentimiento.</li>
                    <li>Cuando sea necesario para proporcionar nuestros servicios.</li>
                    <li>Para cumplir con la ley o responder a solicitudes legales.</li>
                </ul>

                <h2>5. Seguridad de su Información</h2>
                <p>
                    Tomamos medidas razonables para proteger su información personal de pérdida, robo y uso indebido. Sin embargo, ningún método de
                    transmisión por Internet o almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
                </p>

                <h2>6. Sus Derechos</h2>
                <p>
                    Usted tiene ciertos derechos en relación con su información personal, incluyendo el derecho a acceder, corregir o eliminar su
                    información. Para ejercer estos derechos, contáctenos a través de [serFlix@serFlix.com].
                </p>

                <h2>7. Cambios a esta Política de Privacidad</h2>
                <p>
                    Serflix se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será efectivo
                    inmediatamente después de su publicación en el sitio web. Su uso continuado del servicio después de la publicación de cambios
                    constituye su aceptación de la nueva política.
                </p>

                <h2>8. Ley Aplicable</h2>
                <p>
                    Esta Política de Privacidad se rige por las leyes del [país o estado]. Cualquier disputa que surja en relación con esta
                    política se resolverá en los tribunales competentes de [ubicación].
                </p>

                <h2>9. Contacto</h2>
                <p>
                    Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de [serFlix@serFlix.com].
                </p>
            </div>
        </Main>
    );
};

export default Policy