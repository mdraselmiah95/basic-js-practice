// inch to feet conversion

// var inches = 174;
// var feet = inches / 12;

// console.log(feet);


// function inchToFeet(inches) {
//     var feet = inches / 12;
//     return feet;
// }

// var myHight = 120;
// var myFeet = inchToFeet(myHight);
// console.log('My hight is ', myFeet);

// var myHouse = 480;
// var myHouseFeet = inchToFeet(myHouse);
// console.log(myHouseFeet);


// mile to km

// function mileToKilometer(mile) {
//     var km = mile * 1.60934;
//     return km;
// }

// var roadMile = 5;
// var roadKm = mileToKilometer(roadMile);
// console.log(roadKm);

// var marathon = mileToKilometer(26.2);
// console.log(marathon);

// feet to mile

function feetToMile(feet) {
    var mile = feet * 0.000189394;
    return mile;
}

var myRoadMile = feetToMile(8000);
console.log('Our road total mile:',myRoadMile);