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
var SachThamKhao = /** @class */ (function (_super) {
    __extends(SachThamKhao, _super);
    function SachThamKhao(maSach, ngayNhap, donGia, soLuong, nxb, thue) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nxb) || this;
        _this.setThue(thue);
        return _this;
    }
    SachThamKhao.prototype.getThue = function () {
        return this.thue;
    };
    SachThamKhao.prototype.setThue = function (thue) {
        if (thue > 0) {
            this.thue = thue;
        }
        else {
            this.thue = 0;
        }
    };
    SachThamKhao.prototype.thanhTien = function () {
        return _super.prototype.thanhTien.call(this) * this.thue;
    };
    SachThamKhao.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Thue: ").concat(this.thue);
    };
    return SachThamKhao;
}(Sach_1.default));
exports.default = SachThamKhao;
