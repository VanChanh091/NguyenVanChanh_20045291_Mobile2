"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sach_1 = require("./Sach");
var SachGiaoKhoa = /** @class */ (function (_super) {
    __extends(SachGiaoKhoa, _super);
    function SachGiaoKhoa(maSach, ngayNhap, donGia, soLuong, nxb, tinhTrang) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nxb) || this;
        _this.setTinhTrang(tinhTrang);
        return _this;
    }
    SachGiaoKhoa.prototype.getTinhTrang = function () {
        return this.tinhTrang;
    };
    SachGiaoKhoa.prototype.setTinhTrang = function (tinhTrang) {
        if (tinhTrang.length > 0) {
            this.tinhTrang = tinhTrang;
        }
        else {
            this.tinhTrang = "xxx";
        }
    };
    SachGiaoKhoa.prototype.thanhTien = function () {
        if (this.tinhTrang === "moi") {
            return _super.prototype.thanhTien.call(this);
        }
        else if (this.tinhTrang === "cu") {
            return _super.prototype.thanhTien.call(this) * 0.5;
        }
        return 0;
    };
    SachGiaoKhoa.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Tinh Trang: ").concat(this.tinhTrang);
    };
    return SachGiaoKhoa;
}(Sach_1.default));
exports.default = SachGiaoKhoa;
