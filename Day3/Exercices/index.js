// Exo 1
const title = document.querySelector(".title");
title.innerHTML = "I changed the text";

const box = document.querySelector(".box");
box.innerHTML = "I changed the text in the box";

// Exo 2
const bearImg = document.getElementById("bear-img");
bearImg.style.width = "50%";

// Exo 3

function createBox() {
    // sélectionne l'élément ayant la classe 'container-boxes'
    const container = document.querySelector('.container-boxes');

    // crée une nouvelle div ayant la classe 'box'
    const box = document.createElement('div');
    box.classList.add('box2');

    // ajoute la nouvelle div à l'intérieur de l'élément 'container'
    container.appendChild(box);
}

createBox();

// Exo 4

// const chat = document.getElementsByClassName('img-cat');
// while (chat.length) {
//     chat[0].parentNode.removeChild(chat[0]);
// }
const chien = document.getElementsByClassName('img-dog');
while (chien.length) {
    chien[0].parentNode.removeChild(chien[0]);
}

// Exo 5
document.querySelector(".img-cat2").src = "https://placekitten.com/409/287";