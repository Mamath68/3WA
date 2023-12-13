const random = document.querySelector("#randomQuote");
const randomquote = random.addEventListener("click", () => {
    fetch("https://kaamelott.reiter.tf/quote/random")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector("#citation").textContent = data.citation;
            document.querySelector("#personnage").textContent = data.infos.personnage;
            document.querySelector("#acteur").textContent = data.infos.acteur;
            document.querySelector("#saison-episode").textContent = data.infos.saison + " - " + data.infos.episode;
        });
})