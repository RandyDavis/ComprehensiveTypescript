interface Direwolf {
	name: string;
	color: string;
}

var summer: Direwolf = {name: "Summer", color: "Brown"}; // ok
console.log(summer.name + " is " + summer.color + "."); // ok

// var lady: Direwolf = {name: "Lady"}; // error - missing property "color"

var ghost: Direwolf = {name: "Ghost", color: "white", silent: true}; // error - Direwolf has no property silent.
console.log(ghost.silent);