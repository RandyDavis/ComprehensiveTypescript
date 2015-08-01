interface Vehicle {
	name: string;
	direwolf?: string; // ? denotes an optional property
}

var car: Vehicle = { name: "Road Kill", direwolf: "Summer"}; // ok
var truck: Vehicle = {name: "Use Ladder to Enter"}; // ok as direwolf is optional.

interface Person {
	name: string;
	age?: number;
	married?: boolean;
}

var joe: Person = {
	name: "Joe",
	age: 21,
	married: true
}

var sarah: Person = {
	name: "Sare",
	age: 24
}

console.log(joe.married); // ok
console.log(sarah.married); // ok, but returns undefined
