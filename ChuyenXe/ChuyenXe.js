"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSoChuyen, hotenTaiXe, soXe, doanhThu) {
        this.setMaSoChuyen(maSoChuyen);
        this.setHotenTaiXe(hotenTaiXe);
        this.setSoXe(soXe);
        this.setDoanhThu(doanhThu);
    }
    ChuyenXe.prototype.getMaSoChuyen = function () {
        return this.maSoChuyen;
    };
    ChuyenXe.prototype.getHotenTaiXe = function () {
        return this.hotenTaiXe;
    };
    ChuyenXe.prototype.getSoXe = function () {
        return this.soXe;
    };
    ChuyenXe.prototype.getDoanhThu = function () {
        return this.doanhThu;
    };
    ChuyenXe.prototype.setMaSoChuyen = function (maSoChuyen) {
        if (maSoChuyen.length > 0) {
            this.maSoChuyen = maSoChuyen;
        }
        else {
            this.maSoChuyen = "XXX";
        }
    };
    ChuyenXe.prototype.setHotenTaiXe = function (hotenTaiXe) {
        if (hotenTaiXe.length > 0) {
            this.hotenTaiXe = hotenTaiXe;
        }
        else {
            this.hotenTaiXe = "XXX";
        }
    };
    ChuyenXe.prototype.setSoXe = function (soXe) {
        if (soXe > 0) {
            this.soXe = soXe;
        }
        else {
            this.soXe = 0;
        }
    };
    ChuyenXe.prototype.setDoanhThu = function (doanhThu) {
        if (doanhThu > 0) {
            this.doanhThu = doanhThu;
        }
        else {
            this.doanhThu = 0;
        }
    };
    ChuyenXe.prototype.toString = function () {
        return "Ma So Chuyen: ".concat(this.maSoChuyen, ", Ho ten taixe: ").concat(this.hotenTaiXe, ", So xe: ").concat(this.soXe, ", Doanh thu: ").concat(this.doanhThu, "} \n");
    };
    return ChuyenXe;
}());
exports.default = ChuyenXe;
