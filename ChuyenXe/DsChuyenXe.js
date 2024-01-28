"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChuyenXe_1 = require("./ChuyenXe");
var chuyenXeNgT_1 = require("./chuyenXeNgT");
var chuyenXeNT_1 = require("./chuyenXeNT");
var DsChuyenXe = /** @class */ (function () {
    function DsChuyenXe() {
        this.lst = new Array();
    }
    DsChuyenXe.prototype.getLst = function () {
        return this.lst;
    };
    DsChuyenXe.prototype.setLst = function (list) {
        this.lst = list;
    };
    DsChuyenXe.prototype.addChuyenXe = function (cx) {
        if (this.lst.indexOf(cx) == -1) {
            this.lst.push(cx);
            return true;
        }
        return false;
    };
    DsChuyenXe.prototype.tinhTongDoanhThu = function () {
        var sum = 0;
        this.lst.forEach(function (Element) {
            sum += Element.getDoanhThu();
        });
        return sum;
    };
    DsChuyenXe.prototype.tinhTongDoanhThuCXNgT = function () {
        var sum = 0;
        this.lst.forEach(function (Element) {
            if (ChuyenXe_1.default instanceof chuyenXeNgT_1.default) {
                sum += Element.getDoanhThu();
            }
        });
        return sum;
    };
    DsChuyenXe.prototype.tinhTongDoanhThuCXNT = function () {
        var sum = 0;
        this.lst.forEach(function (Element) {
            if (ChuyenXe_1.default instanceof chuyenXeNT_1.default) {
                sum += Element.getDoanhThu();
            }
        });
        return sum;
    };
    return DsChuyenXe;
}());
function main() {
    var ds1 = new DsChuyenXe();
    ds1.addChuyenXe(new chuyenXeNgT_1.default("A01", "A", 2, 100000, "Long Khanh", 200));
    ds1.addChuyenXe(new chuyenXeNgT_1.default("A03", "C", 2, 200000, "Nha Trang", 400));
    ds1.addChuyenXe(new chuyenXeNT_1.default("A02", "B", 1, 200000, 10, 300));
    console.log(ds1);
    console.log(ds1.tinhTongDoanhThu());
}
main();
