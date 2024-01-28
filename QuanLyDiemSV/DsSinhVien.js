"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sinhVien_1 = require("./sinhVien");
var DsSinhVien = /** @class */ (function () {
    // constructor(dsSinhVien:SinhVien[]){
    //     this.dsSinhVien = dsSinhVien;
    // }
    // getDsSinhVien():SinhVien[]{
    //     return this.dsSinhVien;
    // }
    // setDsSinhVien(dsSinhVien:SinhVien[]):void{
    //     this.dsSinhVien = dsSinhVien;
    // }
    function DsSinhVien() {
        this.list = new Array;
    }
    DsSinhVien.prototype.getList = function () {
        return this.list;
    };
    DsSinhVien.prototype.setList = function (list) {
        this.list = list;
    };
    DsSinhVien.prototype.addStudent = function (sinhVien) {
        // this.dsSinhVien.push(sinhVien);
        if (this.list.indexOf(sinhVien) == -1) {
            this.list.push(sinhVien);
            return true;
        }
        return false;
    };
    return DsSinhVien;
}());
function main() {
    var list = new DsSinhVien();
    var st1 = new sinhVien_1.default("A", new Date(1999, 20, 1), 9, 8, 7, 9, 6);
    var st2 = new sinhVien_1.default("B", new Date(1998, 11, 10), 9, 5, 6, 5, 6);
    list.addStudent(st1);
    list.addStudent(st2);
    console.log(list);
}
main();
