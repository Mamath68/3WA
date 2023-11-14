import chalk from "chalk"
import myStudents from "./app.js"

// Combine styled and normal strings
console.log("My 4 Coworkers are : " + chalk.blue(myStudents[0]) + ", " + chalk.red(myStudents[1]) + ", " + chalk.white(myStudents[2]) + " and " + chalk.green(myStudents[3]));
