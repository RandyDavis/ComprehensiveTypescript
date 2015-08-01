interface Person {
	name: string;
	age: number;
}

var joe: Person = {name: "Joe", age: 31};

// var sarah: Person = {name: "Sare"}; // error - missing age property
var sarah: Person = {name: "Sare", age: 24}; // error - missing age property

console.log(sarah.married);