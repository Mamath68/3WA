const root = document.getElementById('root')
const unorder = document.getElementById('unorder')
const order = document.getElementById('ordered')

let randomNumbers = [];
let pass = false;
let i = 0;

const displayPerSeconds = (array) => {
    if (i < array.length) {
        order.innerHTML += array[i]
        setTimeout(() => {
            i++;
            displayPerSeconds(array)
        }, 100)
    }
}

const numberSorter = (array) => {
    const numberSorted = array.sort((a, b) => a - b);

    setTimeout(() => {
        console.log(numberSorted);
        displayPerSeconds(numberSorted)
    }, 1000)
};

const numberDisplayer = (array) => {
    unorder.innerHTML =
        `<p>
                ${array.map((element) => {
            return element
        }).join('')}
                </p>`
    numberSorter(array)
}

const numberMaker = (array) => {
    let i = 0;
    while (array.length < 20) {

        pass = true;
        const number = Math.floor(Math.random() * 20);

        array.map((element) => {
            if (element == number) {
                pass = false
            }
        })

        if (pass == true) {
            array.push(number)
        }
    }
    console.log(array)
    numberDisplayer(array)
}

numberMaker(randomNumbers)
