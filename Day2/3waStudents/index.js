// import fs from 'fs'
import chalk from "chalk"
import myStudents from "./app.js"

// Combine styled and normal strings
console.log("My 4 Coworkers are : " + chalk.blue(myStudents[0]) + ", " + chalk.red(myStudents[1]) + ", " + chalk.yellow(myStudents[2]) + " and " + chalk.green(myStudents[3]));


// const server = require('http').createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello World</h1>');
//     res.end();
// });

// server.listen(8000, () => {
//     console.log('Le serveur est en cours d\'exécution sur http://localhost:8000');
// });

// require('axios').get('http://www.google.com')
//     .then(response => {
//         fs.writeFile("google.html", response.data, function (err) {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log("Le fichier HTML a été créé avec succès !");
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });

// fs.writeFile("example.txt", "Ceci est un exemple de fichier créé avec le module fs dans Node.js", function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Le fichier a été créé avec succès !");
// });

// fs.readFile('example.txt', 'utf8', function (err, data) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });