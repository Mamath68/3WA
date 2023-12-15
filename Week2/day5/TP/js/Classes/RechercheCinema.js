const adresse = document.querySelector('#adresse');

document.querySelector('#get-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`)
                .then((response) => response.json())
                .then(response => {
                    adresse.textContent = response.features[0].properties.label;
                })

        });
    }
})