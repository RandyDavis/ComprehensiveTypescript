// Quick Example
interface Jump {
	(distance: number): string;
	height: number;
}

var j: Jump;
j(50);
j.height = 12;