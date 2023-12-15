// 

function ShowTheatreArround10km() {
    const apiUrl = "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?where=within_distance(geolocalisation%2C%20geom%27POINT(7.32%2047.73)%27%2C%2010km)&order_by=fauteuils%20desc&limit=20&timezone=Europe%2FParis";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cinemas = data.results;

            cinemas.forEach(cinema => {
                const cinemaList = document.getElementById("cinemaNear");

                cinemaList.innerHTML += `
                <tr>
                    <td>${cinema.nom}</td>
                    <td>${cinema.adresse}</td>
                    <td>${cinema.commune}</td>
                </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
        });
}
ShowTheatreArround10km();
