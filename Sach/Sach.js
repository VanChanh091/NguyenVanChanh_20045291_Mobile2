"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sach = /** @class */ (function () {
    function Sach(maSach, ngayNhap, donGia, soLuong, nxb) {
        this.setMaSach(maSach);
        this.setNgayNhap(ngayNhap);
        this.setDonGia(donGia);
        this.setSoLuong(soLuong);
        this.setNxb(nxb);
    }
    Sach.prototype.getMaSach = function () {
        return this.maSach;
    };
    Sach.prototype.getNgayNhap = function () {
        return this.ngayNhap;
    };
    Sach.prototype.getDonGia = function () {
        return this.donGia;
    };
    Sach.prototype.getSoLuong = function () {
        return this.soLuong;
    };
    Sach.prototype.getNxb = function () {
        return this.nxb;
    };
    Sach.prototype.setMaSach = function (maSach) {
        if (maSach.length > 0) {
            this.maSach = maSach;
        }
        else {
            this.maSach = "xxx";
        }
    };
    Sach.prototype.setNgayNhap = function (ngayNhap) {
        this.ngayNhap = ngayNhap;
    };
    Sach.prototype.setDonGia = function (donGia) {
        if (donGia > 0) {
            this.donGia = donGia;
        }
        else {
            this.donGia = 0;
        }
    };
    Sach.prototype.setSoLuong = function (soLuong) {
        if (soLuong > 0) {
            this.soLuong = soLuong;
        }
        else {
            this.soLuong = 0;
        }
    };
    Sach.prototype.setNxb = function (nxb) {
        if (nxb.length > 0) {
            this.nxb = nxb;
        }
        else {
            this.nxb = "xxx";
        }
    };
    Sach.prototype.thanhTien = function () {
        return this.soLuong * this.donGia;
    };
    Sach.prototype.toString = function () {
        return "maSach: ".concat(this.maSach, ",\n    ngayNhap: ").concat(this.ngayNhap, ",\n    donGia: ").concat(this.donGia, ",\n    soLuong: ").concat(this.soLuong, ",\n    nxb: ").concat(this.nxb, ",\n    ThanhTien: ").concat(this.thanhTien());
    };
    return Sach;
}());
exports.default = Sach;
