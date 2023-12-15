const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

const BASE_IMG_PATH = './img';

function loadImage(imagePath) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imagePath;

        img.addEventListener('load', () => {
            resolve(img)
        });
    });
}

// function getBackground() {
//     return new Promise((resolve, reject) => {
//         const background = new Image();
//         background.src = '../../img/unsplash.jpg';

//         background.addEventListener('load', () => {
//             resolve(background);
//         });
//     });
// }

// function getBird() {
//     return new Promise((resolve, reject) => {
//         const bird = new Image();
//         bird.src = '../../img/bird-r.png';

//         bird.addEventListener('load', () => {
//             resolve(bird);
//         });
//     });
// }

// getBackground().then(background => {
//     context.drawImage(background, 0, 0, canvas.width, canvas.height);
//     return getBird();
// }).then(bird => {
//     context.drawImage(bird, 0, 0, canvas.width, canvas.height);
// });

// On lance les 2 promesses en même temps et lorsqu'elles sont toutes les 2 résolues
// On affiche les images dans l'ordre souhaité
Promise.all([loadImage(`${BASE_IMG_PATH}/unsplash.jpg`), loadImage(`${BASE_IMG_PATH}/bird-r.png`)])
    .then(([background, bird]) => {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
        context.drawImage(bird, 0, 0, canvas.width, canvas.height);
    });