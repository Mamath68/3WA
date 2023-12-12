import Person from './Person.js';

class Teacher extends Person {
    #sessions;

    constructor(firstname, lastname, sessions = []) {
        super(firstname, lastname);
        this.#sessions = sessions;
    }

    get sessions() {
        return this.#sessions;
    }

    set sessions(sessions) {
        this.#sessions = sessions;
    }
}

export default Teacher;