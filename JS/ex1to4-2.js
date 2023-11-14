// EX1
// let array = ['one', 'two', 'three']

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Version Ternaire
let array = ['one', 'two', 'three'];

array.forEach(i => console.log(i));

// // EX2
// // Function 1
// const notify = (name) => {
//     console.log(name + " is here");
// }

// // Function 2
// const setTimeout = () => {
//     console.log("1000ms == 1 second")
// };

// setTimeout(3000)

// // Do no edit
// notify("BOB");

// Version Ternaire
const notify = (name) => console.log(`${name} is here`);
const setTimeout = () => console.log("1000ms == 1 seconds");
setTimeout(setTimeout, 3000);
notify("BOB");


// EX3
const myArray = ["one", "two", "three"];

myArray.forEach(array => console.log(array))


// EX4
const myArray2 = [4, 3, 5, 8];

console.log(myArray2.sort())