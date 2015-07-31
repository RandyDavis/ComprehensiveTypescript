var myColors: string[] = [];

myColors.push("green");
myColors.push("red");
//myColors.push(5);  Error - 5 is not a string

// same as above but using Generic syntax
var myFavoriteNumbers: Array<number> = [];
myFavoriteNumbers.push(7);
myFavoriteNumbers.push(77);
// myFavoriteNumbers.push("777"); Error - "777" is not a number


var allTheThings: any[] = [];
allTheThings.push(1);
allTheThings.push("Hi");
allTheThings.push({});