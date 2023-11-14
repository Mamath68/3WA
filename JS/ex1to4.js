// EX1
const array = ['one', 'two', 'three'];
array.forEach(i => console.log(i));

// EX2
const notify = (name) => console.log(name + " is here");
const setTimeout = () => console.log("1000ms == 1 seconds");
setTimeout(setTimeout, 3000);
notify("BOB");

// EX3
const myArray = ["one", "two", "three"];
myArray.forEach(array => console.log(array))

// EX4
const myArray2 = [4, 3, 5, 8];
console.log(myArray2.sort())