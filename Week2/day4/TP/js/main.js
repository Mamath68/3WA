import TmdbApi from './classes/TmdbApi.js';
import { config } from './config.js';

const elements = {
    searchForm: document.querySelector('#search-form'),
    movieList: document.querySelector('#movie-list'),
    moviePagination: document.querySelector('#movie-pagination'),
    errorNotif: document.querySelector('#error-notif'),
};

const token = config.token;
const tmdbApi = new TmdbApi(token);

elements.searchForm.addEventListener('submit', async (e) => {
    // On empêche le rechargement de la page
    e.preventDefault();
    try {
        // Récupération de la valeur du champ de recherche
        const formData = new FormData(e.target);
        const search = formData.get('search');

        if (search.length < 3) {
            throw new Error("La recherche doit faire au-moins 3 caractères");
        }

        // Envoyer une requête vers l'api pour récupérer la liste des films
        // correspondants à cette recherche
        const response = await tmdbApi.searchMovies(search);

        // Génération de la pagination
        createNavigation(response.total_pages, search);

        // Affichage des résultats
        createMoviesHtml(response.results);

    } catch (error) {
        elements.errorNotif.removeAttribute('hidden');
        elements.errorNotif.textContent = error;
    }
});

function createMoviesHtml(movies) {
    // Affichage des résultats dans le html
    elements.movieList.innerHTML = movies.map(movie => {
        if (movie.poster_path == null) {
            return `
            <div class="col">
                <article class="card">
                    <p class="text-center">No Poster</p>
                    <div class="card-body">
                        <h2 class="card-title">${movie.title}</h2>
                        <p class="card-text">${movie.overview}</p>
                    </div>
                </article>
            </div>
        `;
        } else {
            return `
            <div class="col">
                <article class="card">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                    <div class="card-body">
                        <h2 class="card-title">${movie.title}</h2>
                        <p class="card-text">${movie.overview}</p>
                    </div>
                </article>
            </div>
        `;
        }

    }).join('');
}

function createNavigation(totalPages, search) {
    // Html de la navigation
    let outputHtml = '';

    // Pour chacune des pages de la recherche on ajoute un élément li avec le numéro de la page
    for (let page = 1; page <= totalPages; page++) {
        outputHtml += `
            <li class="page-item">
                <a class="page-link" href="#" data-id="${page}">${page}</a>
            </li>
        `;
    }

    elements.moviePagination.innerHTML = outputHtml;

    // Mise en place des événements sur tous les liens de la navigation
    document.querySelectorAll('#movie-pagination .page-link')
        .forEach(link => link.addEventListener('click', async (e) => {
            e.preventDefault();

            const response = await tmdbApi.searchMovies(search, e.target.dataset.id);
            createMoviesHtml(response.results);
        }));
}