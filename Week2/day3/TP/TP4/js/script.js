const random = document.querySelector("#randomQuote");
const cardImage = document.querySelector("#cardImg")
const randomquote = random.addEventListener("click", () => {
    fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const cardImages = document.createElement('img');
            cardImages.src = data.card_images[0].image_url;
            cardImage.appendChild(cardImages);
        });
})