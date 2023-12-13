import Painter from './classes/Painter.js';

const canvas = document.querySelector('#canvas');
const painter = new Painter(canvas);

const elements = {
    colors: document.querySelectorAll('.colors'),
    size: document.querySelector('#size'),
    eraseButton: document.querySelector('#erase-button')
};

for (let color of elements.colors) {
    color.addEventListener('click', (e) => {
        painter.config.color = e.target.dataset.color;
    });
}

elements.size.addEventListener('change', (e) => {
    painter.config.size = e.target.value;
});

elements.eraseButton.addEventListener('click', (e) => {
    e.preventDefault();

    painter.erase();
});

painter.setupEvents();