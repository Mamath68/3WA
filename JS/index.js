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

// mySecondFunction('')

let myUsers = ['John', 'Jane', 'Kate', 'Chloe', 'Sarah']

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i < myUsers.length; i++) {
    console.log(myUsers[i]);
}

myUsers.forEach(user => console.log(user))