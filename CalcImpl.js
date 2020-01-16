"use strict";
exports.__esModule = true;
var CallculaterImpl = /** @class */ (function () {
    function CallculaterImpl() {
    }
    CallculaterImpl.prototype.addition = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var total = 0;
        num2.forEach(function (element) {
            total = total + element;
        });
        return num + total;
    };
    CallculaterImpl.prototype.substraction = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var total = 0;
        num2.forEach(function (element) {
            total = total - element;
        });
        return num - total;
    };
    CallculaterImpl.prototype.multiplication = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var total = 0;
        num2.forEach(function (element) {
            total = total * element;
        });
        return num * total;
    };
    CallculaterImpl.prototype.division = function (num) {
        var num2 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            num2[_i - 1] = arguments[_i];
        }
        var total = 0;
        num2.forEach(function (element) {
            total = total / element;
        });
        return num / total;
    };
    return CallculaterImpl;
}());
exports.CallculaterImpl = CallculaterImpl;
