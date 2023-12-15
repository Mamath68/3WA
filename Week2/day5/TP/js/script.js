function ShowTheatre() {
    const apiUrl = "https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/etablissements-cinematographiques/records?order_by=fauteuils%20desc&limit=20";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cinemas = data.results;

            cinemas.forEach(cinema => {
                const cinemaList = document.getElementById("cinema");

                cinemaList.innerHTML +=`
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

ShowTheatre();