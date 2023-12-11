// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizz Buzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Version Ternaire
for (var i = 1; i <= 100; i++) {
    console.log(
        i % 3 === 0 && i % 5 === 0 ? "Fizz Buzz" :
            i % 3 === 0 ? "Fizz" :
                i % 5 === 0 ? "Buzz" :
                    i
    );
}