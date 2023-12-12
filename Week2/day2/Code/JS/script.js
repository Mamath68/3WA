import Canvas from './classes/Canvas.js';
import Student from './classes/Student.js';
import Teacher from './classes/Teacher.js';


/* --------------------------
----- FONCTION FLECHEES -----
--------------------------- */
// document.querySelector('button').addEventListener('click', (e) => {
//     console.log(e.target);
// });

// const loadTasks = () => {
// Code de la fonction
// };

/*
* Syntaxe plus courte pour les fonctions (pas de mot-clé function, parfois pas besoin du mot-clé return)
* this
*/

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => a + b;
// console.log(sum(5, 10));

/* --------------------------
----- FONCTION TABLEAU ------
--------------------------- */

// La fonction map sur les tableau permet de créer un nouveau tableau basé sur les élements d'un tableau d'origine

// Tableau qui contient les notes sur 10 d'un élève fictif
// const marks10 = [
//     9,
//     5,
//     7,
//     4,
//     8
// ];

// On veut récupérer un tableau avec toutes ces notes mais sur 20
// Les éléments retournés dans la fonction callback seront les valeurs du nouveau tableau
// const marks20 = marks10.map((mark) => mark * 2);
// console.log(marks20);

// La fonction filter sur les tableau permet de créer un nouveau tableau basé sur les éléments d'un tableau d'origine et une condition
// const marksAbove12 = marks20.filter(mark => mark >= 12);
// const marksAbove12 = marks20.filter(function (mark) {
//     return mark >= 12;
// });

// console.log(marksAbove12);

// La fonction reduce qui va permettre de réduire un tableau à une seule valeur
// console.log(marksAbove12.reduce((total, mark) => total + mark, 0));

// Version sans reduce
// let total = 0;

// for (const mark of marksAbove12) {
//     total += mark;
// }

// console.log(total);

// console.log(marks10.map(mark => mark * 2).filter(mark => mark >= 12).join(' - '));

// marks20.forEach(mark => {
//     console.log(mark);
// });

/* --------------------------
----- DESTRUCTURATION -------
--------------------------- */
// function sum (...numbers) {
//     return numbers.reduce((acc, number) => acc + number, 0);
// }

// console.log(sum(5, 10));
// console.log(sum(5, 10, 8, 7));
// console.log(sum(8, 10, 12));

// const fruits = [
//     'Banane',
//     'Fraise',
//     'Framboise'
// ];

// const agrumes = [
//     'Orange',
//     'Mandarine',
//     'Pamplemousse'
// ];


// fruits.push(...agrumes);
// console.log(fruits);

// const agrumes = [
//     'Orange',
//     'Mandarine',
//     'Pamplemousse'
// ];

// On copie tous les éléments du tableau agrumes vers le nouveau tableau des fruits
// const fruits = [...agrumes];
// fruits.push('Banane', 'Fraise', 'Framboise');

// console.log(agrumes, fruits);
// console.log(fruits, ...fruits);

// Déstructuration
// const user = "jean;dupont;42";
// const [firstname, lastname, age] = user.split(';');

// console.log(`Bonjour ${firstname} ${lastname}, vous avez ${age} ans!`);

// const coords = {
//     latitude: 47.750839,
//     longitude: 7.33588,
// data: [
//
// ]
// geometry : {}
// };

// const { latitude: lat, longitude: long } = coords

// console.log(`Les Coordonnée GPS de mulhouse sont Latitude: ${lat} et Longitude : ${long}`);

// const student = new Student("Jean", "Dupont", "fsd49a");
// const teacher = new Teacher("Paul", "Durand", ["fsd49a", "fsd48b"]);
// console.log(student, teacher);

// const canvas = document.querySelector('#canvas');
// const context = canvas.getContext('2d');

// // Dessin d'un rectangle
// context.beginPath();
// context.rect(50, 50, 100, 150);
// context.fillStyle = 'forestgreen';
// context.fill();

// // Création d'un trait
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 200);
// context.strokeStyle = 'dodgerblue';
// context.lineWidth = 5;
// context.stroke();

// // Integration d'une image
// const img = new Image();
// img.src = '../img/bird-r.png';

// img.addEventListener('load', () => {
//     context.drawImage(img, 0, 0, 840, 470, 0, 0, 84, 47, canvas.width, canvas.height)
// })

const canvas = new Canvas('#canvas');
