var _this = this;
function hello(message) {
    if (message === void 0) { message = "Hello World!"; }
    console.log(message);
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Orange"] = 0] = "Orange";
    Fruit[Fruit["Apple"] = 1] = "Apple";
    Fruit[Fruit["Grape"] = 2] = "Grape";
})(Fruit || (Fruit = {}));
;
var c = Fruit.Orange;
var myFunc = function () {
    console.log(_this.name);
};
//# sourceMappingURL=compile.js.map