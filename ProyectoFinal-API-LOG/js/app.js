const apiKey = 'f869ac334bdeeac71b2898decc464648'; // Reemplaza con tu API key de TMDb
const searchButton = document.getElementById('botonApi');
const searchInput = document.getElementById('imputApi');
const moviesContainer = document.getElementById('movies');

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const query = searchInput.value;
    if (query) {
        fetchMovies(query);
    }
});

async function fetchMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('cardMovies');
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" width =210px height=280px>
            <h3>${movie.title}</h3>
        `;
        moviesContainer.appendChild(movieElement);
    });
}
