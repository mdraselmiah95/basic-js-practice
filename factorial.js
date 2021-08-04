// 2! = 2 * 1;
// 3! = 3 * 2 * 1;
// 4! = 4 * 3 * 2 * 1;
// 5! = 5 * 4 * 3 * 2 * 1;

// var factorial = 1;
// for (var i = 1; i <= 7; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);


// factorial function

// function getFactorial(num) {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(4);
// console.log('My first Factorial number:', firstFactorial);



// var secondFactorial = getFactorial(11);
// console.log('My second Factorial number:',secondFactorial);

// factorial deceleration in function

function getFactorials(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var factorialOne = getFactorials(5);
console.log('My first Factorial:', factorialOne);

var factorialTwo = getFactorials(9);
console.log('My second Factorial:', factorialTwo);