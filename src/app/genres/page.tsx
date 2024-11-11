import { Main } from "@/layout/Main/main"

const Genres = () =>{
    return(
        <Main>
        <section className="genres-list">
        <h2>Géneros</h2>
        <div className="genres">
          {/* Aquí agregar tarjetas de géneros */}
          <div className="genre-card">
            <img src="" alt="Imagen de género" />
            <div className="genre-info">
              <h3>Terror</h3>
              <p>Descripción...</p>
              <button>Leer más</button>
            </div>
          </div>
          {/* Repetir div.genre-card para cada género */}
        </div>
      </section>
        </Main>
    )
}

export default Genres