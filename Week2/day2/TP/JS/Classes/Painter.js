class Painter {
    #canvas;
    #context;
    #oldLocation;
    #isDrawing;
    #config;

    constructor(canvas) {
        this.#canvas = canvas;
        this.#context = this.#canvas.getContext('2d');
        this.#oldLocation = null;
        this.#isDrawing = false;
        this.#config = {
            color: 'black',
            size: 1
        };
    }

    drawLine(mouseLocation) {
        this.context.beginPath();

        // On part de la précédente position
        this.context.moveTo(this.#oldLocation.x, this.#oldLocation.y);

        // Jusqu'à la nouvelle position de la souris
        this.context.lineTo(mouseLocation.x, mouseLocation.y);

        // On utilise la configuration du dessin
        this.context.lineWidth = this.config.size;
        this.context.strokeStyle = this.config.color;
        this.context.lineCap = 'round';

        this.context.stroke();
    }

    erase() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    getMouseLocation(clientX, clientY) {
        const { left, top } = canvas.getBoundingClientRect();

        return {
            x: clientX - left,
            y: clientY - top
        };
    }

    setupEvents() {
        this.canvas.addEventListener('mousemove', (e) => {
            const mouseLocation = this.getMouseLocation(e.clientX, e.clientY);

            // Ce code ne sera effectué que si le bouton de la souris a été pressée
            if (this.#isDrawing) {
                this.drawLine(mouseLocation);
            }

            // On enregistre la positionde la souris
            this.#oldLocation = mouseLocation;
        });

        this.canvas.addEventListener('mousedown', (e) => {
            // On indique que l'on est bien en train de dessiner
            this.#isDrawing = true;
        });

        this.canvas.addEventListener('mouseup', (e) => {
            // On a relâché la souris => on arrête de dessiner
            this.#isDrawing = false;
        });

        this.canvas.addEventListener('mouseleave', (e) => {
            this.#isDrawing = false;
        });
    }

    get canvas() {
        return this.#canvas;
    }

    set canvas(canvas) {
        this.#canvas = canvas;
    }

    get context() {
        return this.#context;
    }

    set context(context) {
        this.#context = context;
    }

    get config() {
        return this.#config;
    }

    set config(config) {
        this.#config = config;
    }
}

export default Painter;