import { Main } from "@/layout/Main/main"

const billboard = () => {
    return (
        <Main>
        <div className="cartelera-container">
      <section className="movies-list">
        <h2>Cartelera</h2>
        <div className="movies">
          {/* Aquí agregar tarjetas de películas */}
          <div className="movie-card">
            <img src="" alt="Poster de la película" />
            <div className="movie-info">
              <p>Fecha</p>
              <h3>Título</h3>
              <p>Descripción corta...</p>
              <button>Leer más</button>
            </div>
          </div>
          {/* Repetir div.movie-card para cada película */}
        </div>
      </section>

    </div>
        </Main>
    )
}

export default billboard