
const myId = document.getElementById('myId')
const myIdQuery = document.querySelector('#myId')
// console.log(myId)
// console.log(myIdQuery)

const secondElement = document.getElementById('second')
secondElement.innerHTML = "<em>Something</em> happened here!";
secondElement.style.fontWeight = "bold"
// secondElement.style.fontSize = "50px"

const mainheading = document.getElementById('mainheading')

mainheading.style.fontFamily = "Tahoma"

const newAllButton = document.querySelectorAll('button')
newAllButton.forEach(button => button.style.backgroundColor = 'yellow');

const allWithRed = document.getElementsByClassName("red");
const newAllWithRed = document.querySelectorAll('.red')

for (let i = 0; i < allWithRed.length; i++) {
    allWithRed[i].style.color = "red";
}

const firstBtn = document.getElementById("button1");
const secondBtn = document.getElementById("button2");

let count = 0;

firstBtn.addEventListener("click", () => {
    count++
    const text = "I have been clicked" + count + " " + "times";
    const newText = `I have been clicked ${count} times`;
    firstBtn.innerHTML = newText;
})
let counter = 0;
secondBtn.addEventListener("mouseover", () => {
    counter++
    const text = "I have been over this button" + count + " " + "times";
    const newText = `I have been over this button ${counter} times`;
    secondBtn.innerHTML = newText;
})

const myFirstButton = document.querySelectorAll('button')[0]

const callConsole = () => console.log('Hello World')
myFirstButton.addEventListener('click', callConsole)


const choiceSpan = document.getElementById("show-choice");
const selectors = document.getElementsByTagName("select");
// Attach an event listener to each of the select elements,
// responding to the "change" event
for (let i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("change", (event) => {
        // event.target is the selector that has been changed,
        // its value is that of the selected option
        choiceSpan.innerHTML = event.target.value;
    });
}