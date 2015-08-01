// Quick Example

interface NameList {
	[index: number]: string;
}

// var list2: NameList = ['Jon', 1, "James"]; // error. 1 is not type string.

interface Ages {
	[index: string]: number;
}

// var ages: Ages = [];
// ages['Jon'] = 15; // ok
// ages[9] = 'nine'; // error - index type should be a string and return value should be a number


// Main Example
interface ColorList {
	[index: number]: string; // denotes index has to be a number and value has to be a string
}

var colors: ColorList = ["Red", "Green", "Blue"]; // ok

interface NumberList {
	[index: number]: number;
}

var safeCombo: NumberList = [100, 56, 32]; // ok

interface ColorsCount {
	[index: string]: number;
}

var colorsISaw: ColorsCount = {};
colorsISaw["blue"] = 5;
colorsISaw["green"] = 7;

