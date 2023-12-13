// Charger les régions au chargement de la page
document.addEventListener("DOMContentLoaded", loadRegions);

function loadRegions() {
    fetch('https://geo.api.gouv.fr/regions')
        .then(response => response.json())
        .then(data => {
            const regionsDropdown = document.getElementById('regions');
            data.forEach(region => {
                const option = document.createElement('option');
                option.value = region.codeRegion;
                option.text = region.code + ' - ' + region.nom;
                regionsDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des régions:', error));
}

function loadDepartments() {
    const selectedRegionId = document.getElementById('regions').value;

    fetch(`https://geo.api.gouv.fr/regions/${selectedRegionId}/departements`)
        .then(response => response.json())
        .then(data => {
            const departmentsDropdown = document.getElementById('departments');
            departmentsDropdown.innerHTML = '';

            data.forEach(departement => {
                const option = document.createElement('option');
                option.value = departement.code;
                option.text = departement.code + ' - ' + departement.nom;
                departmentsDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des départements:', error));
}

function loadCities() {
    const selectedDepartmentId = document.getElementById('departments').value;

    fetch(`https://geo.api.gouv.fr/departements/${selectedDepartmentId}/communes`)
        .then(response => response.json())
        .then(data => {
            const cityList = document.getElementById('cityList');
            cityList.innerHTML = '';

            data.forEach(city => {
                const listItem = document.createElement('li');
                listItem.textContent = city.nom;
                cityList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des villes:', error));
}