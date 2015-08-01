// Quick Example
//interface Guy {
//	age: number;
//}
//
//class James implements Guy {
//	age: number;
//	direwolf: string;
//}


// Main Example
interface Guy {
	age: number;
}

interface Athlete {
	sport: string;
}

// This class will implement 2 separate interfaces!  Must define the types of each though to avoid errors.
class Dancer implements Guy, Athlete {
	age: number;
	dance: string;
	sport: string;
}