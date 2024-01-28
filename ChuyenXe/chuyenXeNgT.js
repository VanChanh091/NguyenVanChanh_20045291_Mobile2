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
var ChuyenXe_1 = require("./ChuyenXe");
var CXNgT = /** @class */ (function (_super) {
    __extends(CXNgT, _super);
    function CXNgT(maSoChuyen, hotenTaiXe, soXe, doanhThu, noiDen, soNgayDiDuoc) {
        var _this = _super.call(this, maSoChuyen, hotenTaiXe, soXe, doanhThu) || this;
        _this.setNoiDen(noiDen);
        _this.setSoNgayDiDuoc(soNgayDiDuoc);
        return _this;
    }
    CXNgT.prototype.getNoiDen = function () {
        return this.noiDen;
    };
    CXNgT.prototype.getSoNgayDiDuoc = function () {
        return this.soNgayDiDuoc;
    };
    CXNgT.prototype.setNoiDen = function (noiDen) {
        if (noiDen.length > 0) {
            this.noiDen = noiDen;
        }
        else {
            this.noiDen = noiDen;
        }
    };
    CXNgT.prototype.setSoNgayDiDuoc = function (soNgayDiDuoc) {
        if (soNgayDiDuoc > 0) {
            this.soNgayDiDuoc = soNgayDiDuoc;
        }
        else {
            this.soNgayDiDuoc = soNgayDiDuoc;
        }
    };
    CXNgT.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Noi Den: ").concat(this.noiDen, ", So Ngay Di Duoc: ").concat(this.soNgayDiDuoc);
    };
    return CXNgT;
}(ChuyenXe_1.default));
exports.default = CXNgT;
