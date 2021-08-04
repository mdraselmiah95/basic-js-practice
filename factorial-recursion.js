// 2! = 2 * 1;
// 3! = 3 * 2 * 1;
// 4! = 4 * 3 * 2 * 1;          = 4 * 3!
// 5! = 5 * 4 * 3 * 2 * 1;      = 5 * 4!
//6! = 6 * 5 * 4 * 3 * 2 * 1    = 6 * 5!
//7! = 7 * 6 * 5 * 4 * 3 * 2 * 1
//8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

// n! = n * (n-1)!

function countDown(num) {
    if (num == 1) {
        return 1;
    }
    return num * countDown(num - 1);
}

const myAnotherFactorial = countDown(8);
console.log(myAnotherFactorial);