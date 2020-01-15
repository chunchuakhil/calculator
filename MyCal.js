"use strict";
exports.__esModule = true;
var MyCallculater = /** @class */ (function () {
    function MyCallculater() {
    }
    MyCallculater.prototype.addition = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var total = 0;
        // throw new Error("Method not implemented.");
        //return (num+function(num2){return 7})
        num2.forEach(function (element) {
            total = total + element;
        });
        return num + total;
    };
    MyCallculater.prototype.substraction = function (num) {
        throw new Error("Method not implemented.");
    };
    MyCallculater.prototype.multiplication = function (num) {
        throw new Error("Method not implemented.");
    };
    MyCallculater.prototype.division = function (num) {
        throw new Error("Method not implemented.");
    };
    return MyCallculater;
}());
exports.MyCallculater = MyCallculater;
