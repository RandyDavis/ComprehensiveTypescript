// Quick Example
interface Salute {
	(name: string): string;
}

var bonjour:Salute = function(n: string): string {return "Bonjour, " + name };

// Main Example
interface Farewell {
	(name: string): string;
}

var goodbye: Farewell;
goodbye = function (name) {
	return "Goodbye, " + name;
}

var auRevoir: Farewell;
auRevoir = function (resp: string) {
	return "au revoir";
}