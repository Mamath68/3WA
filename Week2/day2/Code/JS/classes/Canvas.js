class Canvas {
    #canvas;
    #context;

    constructor(canvas, context) {
        this.#canvas = document.querySelector(canvas);
        this.#context = this.#canvas.getContext("2d");

        this.#canvas.addEventListener('click', (e) => {
            this.drawRectangle()
        });
    }

    drawRectangle() {
        this.#context.beginPath();
        this.#context.rect(10, 10, 100, 150);
        this.#context.fill();
    }

    get canvas() {
        return this.#canvas;
    }
    get context() {
        return this.#context;
    }
}

export default Canvas;