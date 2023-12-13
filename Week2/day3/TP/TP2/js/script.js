const elements = {
    regionsList: document.querySelector('#regions'),
    departmentsList: document.querySelector('#departments'),
    citiesForm: document.querySelector('#show-cities'),
    citiesList: document.querySelector('#cities-list')
};

const baseUrl = 'https://geo.api.gouv.fr';

// Au chargement de la page on envoie une requête HTTP pour récupérer toutes les régions
fetch(`${baseUrl}/regions`).then(response => response.json()).then(response => {
    // for (const region of response) {
    //     const option = document.createElement('option');
    //     option.value = region.code;
    //     option.textContent = region.nom;
    //     elements.regionsList.append(option);
    // }

    elements.regionsList.innerHTML = response.map(region => {
        return `<option value="${region.code}">${region.nom}</option>`;
    }).join('');
});

elements.regionsList.addEventListener('change', (e) => {
    // Récupération des départements de la région sélectionnée
    fetch(`${baseUrl}/regions/${e.target.value}/departements`)
        .then(response => response.json())
        .then(response => {
            elements.departmentsList.innerHTML = response.map(department => {
                return `<option value="${department.code}">${department.nom}</option>`;
            }).join('');
        });
});

elements.citiesForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Récupération de la liste des villes du département sélectionné
    fetch(`${baseUrl}/departements/${elements.departmentsList.value}/communes`)
        .then(response => response.json())
        .then(response => {
            elements.citiesList.innerHTML = response.map(city => {
                return `<li>${city.nom}</li>`;
            }).join('');
        });
});