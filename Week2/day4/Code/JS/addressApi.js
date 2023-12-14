export function getAddressFromCoords(latitude, longitude) {
    return fetch(`https://api-adresse.data.gouv.fr/reverse/?lon=${longitude}&lat=${latitude}`)
        .then(response => response.json());
}