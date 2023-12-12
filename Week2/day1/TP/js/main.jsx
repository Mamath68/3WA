const HIGH_PRIORITY = 1;
const NORMAL_PRIORITY = 2;
const LOW_PRIORITY = 3;

const elements = {
    taskList: document.querySelector('#task-list'),
    taskForm: document.querySelector('#task-form'),
    removeTasksButton: document.querySelector('#remove-tasks')
};

elements.taskList.style.listStyle = "none";

let tasks = [
    {
        title: "Payer les factures",
        priority: HIGH_PRIORITY,
        isCompleted: false
    },
    {
        title: "Faire la vaisselle",
        priority: NORMAL_PRIORITY,
        isCompleted: false
    },
    {
        title: "Vider les poubelles",
        priority: LOW_PRIORITY,
        isCompleted: false
    }
];

loadTasks();

elements.taskForm.addEventListener('submit', onCreateTask);
elements.removeTasksButton.addEventListener('click', onDeleteTasks);

function onCreateTask(e) {
    // Stopper le rechargement de la page
    e.preventDefault();

    // Récupération des informations du formulaire et création de la nouvelle tâche
    const taskForm = new FormData(elements.taskForm);
    const newTask = {
        title: taskForm.get('title'),
        priority: Number(taskForm.get('priority')),
        isCompleted: false
    };

    // Ajout de la tâche à la liste
    tasks.push(newTask);
    loadTasks();
}

function onUpdateTask(e) {
    e.target.parentNode.classList.toggle("task-over");

    const task = tasks[e.target.dataset.id];
    task.isCompleted = e.target.checked;
}

function onDeleteTasks() {
    // Mettre à jour le tableau des tâches actuelles : 
    // on retire toutes celles qui ont la propriété isCompleted à true
    // => On fait un nouveau tableau qui ne contiendra que les tâches avec la propriété isCompleted à false
    // const newTasks = [];

    // for (let task of tasks) {
    //     if (! task.isCompleted) {
    //         newTasks.push(task);
    //     }
    // }

    tasks = tasks.filter(task => !task.isCompleted);
    // tasks = tasks.filter(function (task) {
    //     return !task.isCompleted;
    // });
    loadTasks();
}

function loadTasks() {
    let html = '';

    // Parcours du tableau des tâches
    for (let [index, task] of tasks.entries()) {
        // 1ère approche

        // // Création de la checbkox
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';

        // // Création du label
        // const label = document.createElement('label');
        // label.append(checkbox);
        // const textLabel = document.createTextNode(task.title);
        // label.append(textLabel);

        // // Création du li
        // const listItem = document.createElement('li');
        // listItem.append(label);

        // // Ajout du li au ul
        // elements.taskList.append(listItem);

        // 2ème approche
        html += `
            <li>
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" data-id="${index}">
                    ${task.title}
                </label>
            </li>
        `;
    }

    elements.taskList.innerHTML = html;

    // Ajout des événements sur les checkbox créées
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', onUpdateTask);
    }
}