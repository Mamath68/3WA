// Ma Version

let myName = "Mathieu";
let myAge = 25
let mySecondAge = 25
let myFinalAge = myAge + mySecondAge

let myObject = {
    myAge: 25,
    mySecondAge: 25,
    myName: 'Mathieu',
    mySecondObject: {
        mySecondAge: 25,
        mySecondName: 'Mathieu',
    }
}

let myArray = ['Mathieu', 25,
    {
        myName: 'Mathieu'
    }
]

let myBoolean = true //1
let mySecondBoolean = false //0
console.log(myArray.length)


if (myBoolean != false || myArray.length > 4) {
    console.log("The Statement is true")
} else if (myAge > 25) {
    console.log("I'm starting to be old")
} else {
    console.log("Default Statement")
}

// Ternary operator

myBoolean ? console.log("The Statement is True") : console.log("The Statement is False")

// Fonction ES5
function myFunction(a, b, c) {
    return a
}

// Fonction ES6
mySecondFunction = (name, lastName) => {
    console.log("My name is" + name + ' ' + lastName);
    // Template string
    console.log(`My Name is ${name} ${lastName}`)
}

mySecondFunction('Mathieu', 'Stamm')

let myUsers = ['John', 'Jane', 'Kate', 'Chloe', 'Sarah']

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i < myUsers.length; i++) {
    console.log(myUsers[i]);
}

myUsers.forEach(user => console.log(user))


let number = 32
let secondNumber = '32'

if (number === secondNumber && number > 30) {
    console.log('Only value')
}


// const myNumsArray = [1, 3, 5, 6]
// const mySecondNumsArray = [7, 9, 3, 23]

// Correction Prof
// // JS strings
// let myName = "John"
// myName = "Yacine"

// // JS numbers / integers / float
// let myAge = 32
// let mySecondAge = 28
// let myFinalAge = myAge + mySecondAge

// // JS objects

// let myObject = {
//     myAge: 32,
//     myName: 'Yacine',
//     mySecondObject: {
//         mySecondAge: 42,
//         mySecondName: 'John'
//     }
// }

// // JS arrays

// let myArray = ['Yacine', 32,
//     {
//         myName: 'John'
//     },
//     ['Samourai', 'Ninja']
// ]

// // JS booleans

// let myBoolean = true  // 1
// let mySecondBoolean = false // 0
// console.log(myArray.length)

// // && AND
// // || OR
// if (myBoolean != false || myArray.length > 4) {
//     console.log('The statement is true')
// }
// else if (myAge > 32) {
//     console.log('I am fetting old')
// }
// else {
//     console.log('Default statement')
// }

// // Ternary operator
// myBoolean ? console.log('Statement is true') : console.log('Statement is not true')



// // Function ES5
// function myFunction(a, b, c) {
//     return a
// }

// // Function ES6
// const mySecondFunction = (name, lastName) => {
//     console.log('My name is ' + name + ' ' + lastName)
//     // Template string
//     console.log(`My name is ${name} ${lastName}`)
// }

// mySecondFunction('John', 'Doe')


// // For loop

// let myUsers = ['John', 'Jane', 'Kate', 'Chloe', 'Sarah']

// // for(let i = 0; i <= 10; i++){
// //     console.log(i)
// // }

// // for(let i = 0; i < myUsers.length; i++ ){
// //     console.log(myUsers[i])
// // }

// // myUsers.forEach(user => console.log(user))

// // const myNewUsers = myUsers.filter(element => element.length > 4)
// // console.log(myNewUsers)



// let number = 32
// let secondNumber = '32'

// if (number === secondNumber && number > 30) {
//     console.log('Only value')
// }
