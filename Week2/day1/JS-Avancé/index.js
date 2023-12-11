let age = 18;

if (age >= 18) {
    console.log("Vous êtes une personne majeure");
} else {
    console.log("Vous êtes une personne mineure");
}

for (let counter = 1; counter <= 100; counter++) {
    console.log(counter);
}

while (counter <= 100) {
    console.log(counter);

    counter++;
}

let userInput = prompt("Saisir un nombre entre 1 et 100");

while (userInput < 1 || userInput > 100) {
    userInput = prompt("Le nombre saisi n'est pas compris entre et 1 et 100");
}

const root = document.getElementById('root');

const fruits = [
    "Orange",
    "Pomme",
    "Ananas",
    "Cerise",
    "Fraise"
];

var contenu = '';
for (var fruit of fruits) {
    contenu += fruit + ' ';
}

root.textContent = contenu;

const user = {
    firstname: "Mathieu",
    lastname: "Stamm"
};

console.log("Je suis" + " " + user.firstname + " " + user.lastname);