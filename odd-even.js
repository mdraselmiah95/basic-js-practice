// const number = 5;
// const remain = number % 2;
// console.log(remain == 0);
// console.log(number % 2 == 0);

// const num = 145;


// even number

// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// var isMyNumberEven = isEven(1387);
// console.log('This is my number: ', isMyNumberEven);

// var isMyNumberEven = isEven(176382);
// console.log('This is my number:', isMyNumberEven);

// odd number

// function isOdd(num) {
//     if (num % 2 == 1) {
//         return true;
//     }
//     return false;
// }

function isOdd(num) {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}

var isMyNumberOdd = isOdd(21);
console.log('This is my number:', isMyNumberOdd);

var isMyNumberOdd = isOdd(7340);
console.log('This is my number:', isMyNumberOdd);