// Quick Example
//class SuperPerson {
//	name: string;
//	constructor(name: string) {
//		this.name = name;
//	}
//	
//	introduce() {
//		return "Hello, I'm " + this.name;
//	}
//}

// Main Example
class SuperCar {
	maxSpeed: number;
	constructor(maxSpeed:number) {
		this.maxSpeed = maxSpeed
	}
	
	superDrive() {
		console.log("I'm going this fast: " + this.maxSpeed);
	}
}

var superCar = new SuperCar(45);
superCar.superDrive();

var fasterCar = new SuperCar(100);
fasterCar.superDrive();