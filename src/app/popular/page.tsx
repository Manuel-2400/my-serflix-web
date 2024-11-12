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
        </div>

        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className="popover-content">
            {selectedTrailer && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${selectedTrailer}`}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            {selectedMovie && (
              <>
                <Typography variant="h6" gutterBottom>{selectedMovie.title}</Typography>
                <Typography variant="body2" gutterBottom>{selectedMovie.overview}</Typography>
                <Typography variant="subtitle2" gutterBottom>Voto: {selectedMovie.vote_average}</Typography>
              </>
            )}
          </div>
        </Popover>
      </section>
    </Main>
  );
};

export default Popular