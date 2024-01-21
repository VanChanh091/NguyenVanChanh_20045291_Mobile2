"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coordinates = /** @class */ (function () {
    function Coordinates(name, x, y) {
        this.setName(name);
        this.setX(x);
        this.setY(y);
    }
    Coordinates.prototype.getName = function () {
        return this.name;
    };
    Coordinates.prototype.getX = function () {
        return this.x;
    };
    Coordinates.prototype.getY = function () {
        return this.y;
    };
    Coordinates.prototype.setName = function (name) {
        if (name.length > 0) {
            this.name = name;
        }
        else {
            this.name = "Chua biet";
        }
    };
    Coordinates.prototype.setX = function (x) {
        if (x > 0) {
            this.x = x;
        }
        else {
            this.x = 0;
        }
    };
    Coordinates.prototype.setY = function (y) {
        if (y > 0) {
            this.y = y;
        }
        else {
            this.y = 0;
        }
    };
    Coordinates.prototype.toString = function () {
        return "".concat(this.name, "(").concat(this.x, "/").concat(this.y, ")");
        // return `Ten:${this.name}, X:${this.x}, Y:${this.y}`;
    };
    return Coordinates;
}());
exports.default = Coordinates;
