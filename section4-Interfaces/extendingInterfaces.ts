// Quick Example
interface Girl {
	age: number;
}

interface Musician extends Girl {
	instrument: string;
}

var melissa = <Musician>{}; // generic syntax for empty object



// Main Example
interface Game {
	title: string;
};

interface ActionGame extends Game {
	speed: number;
	// color: string;
}

var myGame = <ActionGame>{};
myGame.title = "Adventure Fighter";
// myGame.color = "Blue"; // error - property doesn't exist on ActionGame; add it to ActionGame to remove error