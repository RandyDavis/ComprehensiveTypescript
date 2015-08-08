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
var SuperCar = (function () {
    function SuperCar(maxSpeed) {
        this.maxSpeed = maxSpeed;
    }
    SuperCar.prototype.superDrive = function () {
        console.log("I'm going this fast: " + this.maxSpeed);
    };
    return SuperCar;
})();
var superCar = new SuperCar(45);
superCar.superDrive();
var fasterCar = new SuperCar(100);
fasterCar.superDrive();
//# sourceMappingURL=class.js.map