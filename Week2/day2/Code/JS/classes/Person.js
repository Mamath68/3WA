class Person {
    // Propriétés privées (qui ne sont pas accessibles à l'extérieur de la classe)
    #firstname;
    #lastname;

    // Constructeur de la classe (méthode qui est appelée automatiquement lors de l'instanciation)
    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }

    sayHello() {
        return `Bonjour je m'appelle ${this.firstname} ${this.lastname}`;
    }

    // Getter/Setter (permettent d'accéder à des données privées)
    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}

export default Person;