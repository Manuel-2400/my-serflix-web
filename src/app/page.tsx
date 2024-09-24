

export default function Home() {
  // const API_URL = 'https://api.themoviedb.org/3'
  // const API_KEY = '49c9cb85300478a6d4052f8f18f2045f'
  // const IMG_PATCH = 'https://image.tmdb.org/t/p/original'
  // const URL_IMG = 'https://image.tmdb.org/t/p/original'

  //Test commit daniel
  fetch('https://api.themoviedb.org/3/movie/11?api_key=49c9cb85300478a6d4052f8f18f2045f')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
      console.log(data, 'Mira Aqui'); // Trabaja con los datos recibidos de la API
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud Fetch:', error);
    });


  return (
    <div>

    </div>
  );
}
