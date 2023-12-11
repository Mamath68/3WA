
const tasks = [
    {
        title: 'Payer mes factures',
        priority: "Haute",
    },
    {
        title: 'Faire la vaisselle',
        priority: "Normal",
    },
    {
        title: 'Vider les poubelles',
        priority: "Faible",
    },
];

const tasklist = document.getElementById('tasklist');
tasklist.style.listStyle = "none"

function isChecked() {
    const libelle = this.parentNode.querySelector('libelle.title');
    libelle.style.textDecoration = this.checked ? 'line-through' : 'none';
}

tasks.forEach(function (task) {
    const list = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');

    checkbox.addEventListener('change', isChecked);

    const libelle = document.createElement('libelle');
    libelle.textContent = task.title;
    libelle.className = 'title';
    libelle.classList.add('form-check-label');

    switch (task.priority) {
        case 'Haute':
            libelle.style.color = 'red';
            break;
        case 'Normal':
            libelle.style.color = 'blue';
            break;
        case 'Faible':
            libelle.style.color = 'green';
            break;
        default: libelle.style.color = 'black';
            break;
    }

    const priorities = document.createElement('span');
    priorities.textContent = ` (${task.priority})`;

    list.appendChild(checkbox);
    list.appendChild(libelle);
    list.appendChild(priorities);

    tasklist.appendChild(list);
});

/* The commented code is a function called `ajouterTache()` that is meant to add a task to the task
list. It performs the following steps: */
function ajouterTache() {
    const formulaire = document.getElementById('ajouterTache');
    const titre = formulaire.elements['title'].value;
    const priorite = formulaire.elements['priority'].value;

    // Validation du titre
    if (titre.trim() === '') {
        alert('Veuillez entrer un titre pour la tâche.');
        return;
    }

    // Création d'un élément li pour chaque tâche
    const list = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('form-check-input');

    checkbox.addEventListener('change', isChecked);


    // Création d'un élément span pour afficher le titre de la tâche
    const libelle = document.createElement('libelle');
    libelle.textContent = titre;
    libelle.className = 'title';  // Ajout d'une classe pour faciliter la sélection

    // Ajout de la classe CSS en fonction de la priorité
    switch (priorite) {
        case 'Haute':
            libelle.style.color = 'red';
            break;
        case 'Normal':
            libelle.style.color = 'blue';
            break;
        case 'Faible':
            libelle.style.color = 'green';
            break;
        default: libelle.style.color = 'black';
            break;
    }

    // Ajout d'un élément span pour afficher la priorité de la tâche
    const priorities = document.createElement('span');
    priorities.textContent = ` (${priorite})`;

    // Ajout des éléments à l'élément li
    list.appendChild(checkbox);
    list.appendChild(libelle);
    list.appendChild(priorities);

    // Ajout de l'élément li à la liste ul
    document.getElementById('tasklist').appendChild(list);

    // Réinitialisation du formulaire
    formulaire.reset();
}
