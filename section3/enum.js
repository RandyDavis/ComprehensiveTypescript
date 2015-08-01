var Stark;
(function (Stark) {
    Stark[Stark["Dave"] = 0] = "Dave";
    Stark[Stark["Jim"] = 1] = "Jim";
    Stark[Stark["Bill"] = 2] = "Bill";
    Stark[Stark["Carly"] = 3] = "Carly";
    Stark[Stark["Susie"] = 4] = "Susie";
})(Stark || (Stark = {}));
;
var person = Stark.Bill;
console.log(person === Stark.Bill); // true
console.log(person === Stark.Susie); // true
