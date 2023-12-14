import { getCoords } from './geolocation.js';
import { getAddressFromCoords } from './addressApi.js';

const addressText = document.querySelector('#address');

const main = async () => {
    try {
        const { latitude, longitude } = await getCoords();
        const address = await getAddressFromCoords(latitude, longitude);
        addressText.textContent = address.features[0].properties.label;
    } catch (error) {
        addressText.style.color = 'red';
        addressText.textContent = error.message;
    }
};

main();