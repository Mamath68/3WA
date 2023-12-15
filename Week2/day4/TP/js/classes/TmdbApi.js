class TmdbApi {
    #token;
    #baseUrl;

    constructor(token) {
        this.#token = token;
        this.#baseUrl = 'https://api.themoviedb.org/3/search/movie';
    }

    async searchMovies(search, page = 1) {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + this.token
            }
        };

        const params = {
            query: search,
            language: 'fr-FR',
            page: page
        }

        const urlParams = new URLSearchParams(params);

        const response = await fetch(`${this.#baseUrl}?${urlParams}`, options);
        return await response.json();
    }

    get token() {
        return this.#token;
    }

    set token(token) {
        this.#token = token;
    }
}

export default TmdbApi;