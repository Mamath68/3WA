import Person from './Person.js';

class Student extends Person {
    #session;

    // Création d'un constructeur spécifique pour la classe Student
    constructor(firstname, lastname, session) {
        // Appel du constructeur parent
        super(firstname, lastname);
        this.#session = session;
    }

    get session() {
        return this.#session;
    }

    set session(session) {
        this.#session = session;
    }
}

export default Student;