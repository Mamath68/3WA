const IMG_PATH = 'https://image.tmdb.org/t/p/original/';

async function searchMovie(apiKey, titre, langue = 'fr-FR', page = 1) {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie';
    const params = {
        api_key: apiKey,
        language: langue,
        query: titre,
        page: page,
    };

    try {
        // Effectuer la requête GET à l'API en utilisant fetch
        const response = await fetch(`${baseUrl}?${new URLSearchParams(params)}`);
        const data = await response.json();

        // Retourner les résultats et les informations de pagination
        return {
            results: data.results,
            total_pages: data.total_pages,
        };

    } catch (error) {
        console.error(`Erreur lors de la requête à l'API : ${error.message}`);
        return null;
    }
}

document.getElementById('formRecherche').addEventListener('submit', async function (event) {
    event.preventDefault();

    const apiKey = '176243a3bf40d3984ea8afd80db82ed4';
    const titreARechercher = document.getElementById('titre').value;

    const resultatsDiv = document.getElementById('resultats');
    const resultatDiv = document.createElement('div');
    const paginationDiv = document.getElementById('pagination');

    resultatsDiv.innerHTML = ''; // Effacer les résultats précédents
    paginationDiv.innerHTML = ''; // Effacer les boutons de pagination précédents

    const page = 1; // Commencer par la première page

    const { results, total_pages } = await searchMovie(apiKey, titreARechercher, 'fr-FR', page);

    if (results) {
        resultatsDiv.innerHTML = `
        <h1>Résultats pour la recherche '${titreARechercher}' (Page ${page} sur ${total_pages}):</h1>
        `;
        results.forEach(film => {
            if (film.poster_path === null) {
                resultatsDiv.innerHTML += `
                <div >
                <h2>${film.title}</h2>,
                <p>No Poster</p>
                <p>${film.overview}</p> 
                </div>
                `;
            } else {
                resultatsDiv.innerHTML += `
                <div >
                <h2>${film.title}</h2>,
                <img class="movie-img" src="${IMG_PATH + film.poster_path}">
                <p>${film.overview}</p> 
                </div>
                `;
            }
        });

        // Ajouter des boutons de pagination
        for (let i = 1; i <= total_pages; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.classList.add('pagination-button');
            if (i === page) {
                button.classList.add('active');
            }
            button.addEventListener('click', async function () {
                const { results, total_pages } = await searchMovie(apiKey, titreARechercher, 'fr-FR', i);
                resultatsDiv.innerHTML = `<h1>Résultats pour la recherche '${titreARechercher}' (Page ${i} sur ${total_pages}):</h1><br>`;
                results.forEach(film => {
                    if (film.poster_path === null) {
                        resultatsDiv.innerHTML += `
                <div >
                <h2>${film.title}</h2>,
                <p>No Poster</p>
                <p>${film.overview}</p> 
                </div>
                `;
                    } else {
                        resultatsDiv.innerHTML += `
                <div >
                <h2>${film.title}</h2>,
                <img class="movie-img" src="${IMG_PATH + film.poster_path}">
                <p>${film.overview}</p> 
                </div>
                `;
                    }
                });

                // Mettre à jour les classes des boutons de pagination
                const buttons = document.querySelectorAll('.pagination-button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
            });
            paginationDiv.appendChild(button);
        }
    } else {
        resultatsDiv.innerHTML = "<p>La recherche n'a pas abouti.</p>";
    }
});
