"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unused-variable
var toaDo_2 = require("../hinhTron/toaDo");
var Circle = /** @class */ (function () {
    function Circle(tam, banKinh) {
        this.setTam(tam);
        this.setBanKinh(banKinh);
    }
    Circle.prototype.getTam = function () {
        return this.tam;
    };
    Circle.prototype.getBanKinh = function () {
        return this.banKinh;
    };
    Circle.prototype.setTam = function (toaDo) {
        this.tam = toaDo;
    };
    Circle.prototype.setBanKinh = function (banKinh) {
        if (banKinh > 0) {
            this.banKinh = banKinh;
        }
        else {
            this.banKinh = 0;
        }
    };
    Circle.prototype.tinhChuVi = function () {
        return this.banKinh * 2 * Math.PI;
    };
    Circle.prototype.tinhDienTich = function () {
        return Math.PI * (this.banKinh * this.banKinh);
    };
    Circle.prototype.toString = function () {
        return "Hinh tron co tam ".concat(this.tam, " voi ban kinh ").concat(this.banKinh, " co dien tich va chu vi lan luot la ").concat(this.tinhChuVi(), " va ").concat(this.tinhDienTich());
    };
    return Circle;
}());
function main_4() {
    var toaDo_1 = new toaDo_2.default("A", 3, 5);
    var circle_1 = new Circle(toaDo_1, 15);
    console.log(circle_1.toString());
}
main_4();
