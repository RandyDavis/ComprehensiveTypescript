enum Stark { Dave, Jim, Bill, Carly, Susie};

var person: Stark = Stark.Bill;

console.log(person === Stark.Bill); // true
console.log(person === Stark.Susie); // false

// person = Stark.Tim; // error

enum MessageStatus { read, unread, pending };

var status: string = MessageStatus.read;
status = MessageStatus.unread; 

