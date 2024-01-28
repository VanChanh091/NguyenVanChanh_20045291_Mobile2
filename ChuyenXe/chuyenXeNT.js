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
var CXNT = /** @class */ (function (_super) {
    __extends(CXNT, _super);
    function CXNT(maSoChuyen, hotenTaiXe, soXe, doanhThu, soTuyen, soKmDiDuoc) {
        var _this = _super.call(this, maSoChuyen, hotenTaiXe, soXe, doanhThu) || this;
        _this.setSoTuyen(soTuyen);
        _this.setSoKmDiDuoc(soKmDiDuoc);
        return _this;
    }
    CXNT.prototype.getSoTuyen = function () {
        return this.soTuyen;
    };
    CXNT.prototype.getSoKmDiDuoc = function () {
        return this.soKmDiDuoc;
    };
    CXNT.prototype.setSoTuyen = function (soTuyen) {
        if (soTuyen > 0) {
            this.soTuyen = soTuyen;
        }
        else {
            this.soTuyen = soTuyen;
        }
    };
    CXNT.prototype.setSoKmDiDuoc = function (soKmDiDuoc) {
        if (soKmDiDuoc > 0) {
            this.soKmDiDuoc = soKmDiDuoc;
        }
        else {
            this.soKmDiDuoc = soKmDiDuoc;
        }
    };
    CXNT.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", So Tuyen: ").concat(this.soTuyen, ", So Km Di Duoc: ").concat(this.soKmDiDuoc);
    };
    return CXNT;
}(ChuyenXe_1.default));
exports.default = CXNT;
