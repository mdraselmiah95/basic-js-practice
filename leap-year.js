function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}


const myYear = 2087;
const isYourYearLeapYear = isLeapYear(myYear);
console.log('Is this year Leap Year:', isYourYearLeapYear);

var thisYear = isLeapYear(2024);
console.log('This year is Leap year:', thisYear);

var thisYear = isLeapYear(2186);
console.log('This year is Leap year:', thisYear);