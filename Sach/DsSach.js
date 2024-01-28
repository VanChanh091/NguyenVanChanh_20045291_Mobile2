"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sgk_1 = require("./Sgk");
var Stk_1 = require("./Stk");
var DsSach = /** @class */ (function () {
    function DsSach() {
        this.lst = new Array();
    }
    DsSach.prototype.getLst = function () {
        return this.lst;
    };
    DsSach.prototype.setLst = function (list) {
        this.lst = list;
    };
    DsSach.prototype.addSach = function (sach) {
        if (this.lst.indexOf(sach) == -1) {
            this.lst.push(sach);
            return true;
        }
        return false;
    };
    DsSach.prototype.tinhTbGiaStk = function () {
        var price = 0;
        var count = 0;
        for (var _i = 0, _a = this.lst; _i < _a.length; _i++) {
            var sach = _a[_i];
            if (sach instanceof Stk_1.default) {
                price += sach.getDonGia();
                count++;
            }
        }
        return count > 0 ? price / count : 0;
    };
    DsSach.prototype.tinhTongTienTheoSGK = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.lst; _i < _a.length; _i++) {
            var sach = _a[_i];
            if (sach instanceof Sgk_1.default) {
                totalPrice += sach.thanhTien();
            }
        }
        return totalPrice;
    };
    DsSach.prototype.tinhTongTienTheoStk = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.lst; _i < _a.length; _i++) {
            var sach = _a[_i];
            if (sach instanceof Stk_1.default) {
                totalPrice += sach.thanhTien();
            }
        }
        return totalPrice;
    };
    return DsSach;
}());
function main() {
    var list = new DsSach();
    var sgk1 = new Sgk_1.default("A1", new Date("2018-10-3"), 150000, 5, "Nhi Dong", "cu");
    var sgk2 = new Sgk_1.default("A2", new Date("2020-10-23"), 100000, 10, "Kim Dong", "moi");
    var stk1 = new Stk_1.default("B1", new Date("2020-10-1"), 100000, 6, "X", 10);
    var stk2 = new Stk_1.default("B1", new Date("2019-12-15"), 120000, 10, "X", 20);
    list.addSach(sgk1);
    list.addSach(sgk2);
    list.addSach(stk1);
    list.addSach(stk2);
    console.log(list);
    console.log(list.tinhTbGiaStk());
    console.log(list.tinhTongTienTheoSGK());
    console.log(list.tinhTongTienTheoStk());
}
main();
