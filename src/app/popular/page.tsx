import { Main } from "@/layout/Main/main"

const Popular = () =>{
    return(
        <Main>
        <section className="top-rated-list">
        <h2>Mejores Calificados</h2>
        <div className="top-rated">
          {/* Aquí agregar tarjetas de películas mejor calificadas */}
          <div className="top-rated-card">
            <img src="" alt="Poster" />
            <div className="top-rated-info">
              <p>Fecha</p>
              <h3>Título</h3>
              <p>Descripción...</p>
              <button>Leer más</button>
            </div>
          </div>
          {/* Repetir div.top-rated-card para cada película */}
        </div>
      </section>
        </Main>
    )
}

export default Popular