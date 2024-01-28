"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, dob, math, physical, chemical, literature, english) {
        this.setName(name);
        this.setDob(dob);
        this.setMath(math);
        this.setPhysical(physical);
        this.setChemical(chemical);
        this.setLiterature(literature);
        this.setEnglish(english);
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getDob = function () {
        return this.dob;
    };
    Student.prototype.getMath = function () {
        return this.math;
    };
    Student.prototype.getPhysical = function () {
        return this.physical;
    };
    Student.prototype.getChemical = function () {
        return this.chemical;
    };
    Student.prototype.getLiterature = function () {
        return this.literature;
    };
    Student.prototype.getEnglish = function () {
        return this.english;
    };
    Student.prototype.setName = function (name) {
        if (name.length > 0) {
            this.name = name;
        }
        else {
            this.name = "XXX";
        }
    };
    Student.prototype.setDob = function (dob) {
        this.dob = dob;
    };
    Student.prototype.setMath = function (math) {
        if (math > 0) {
            this.math = math;
        }
        else {
            this.math = 0;
        }
    };
    Student.prototype.setPhysical = function (physical) {
        if (physical > 0) {
            this.physical = physical;
        }
        else {
            this.physical = 0;
        }
    };
    Student.prototype.setChemical = function (chemical) {
        if (chemical > 0) {
            this.chemical = chemical;
        }
        else {
            this.chemical = 0;
        }
    };
    Student.prototype.setLiterature = function (literature) {
        if (literature > 0) {
            this.literature = literature;
        }
        else {
            this.literature = 0;
        }
    };
    Student.prototype.setEnglish = function (english) {
        if (english > 0) {
            this.english = english;
        }
        else {
            this.english = 0;
        }
    };
    Student.prototype.tinhDtb = function () {
        return (this.math + this.physical + this.chemical + this.literature + this.english) / 5;
    };
    Student.prototype.toString = function () {
        return "Name: ".concat(this.name, ", Dob: ").concat(this.dob, ", Math: ").concat(this.math, ", Physical: ").concat(this.physical, ", \n    Chemical:").concat(this.chemical, ", Literature:").concat(this.literature, ", English:").concat(this.english, ", DTB: ").concat(this.tinhDtb(), "\n");
    };
    return Student;
}());
exports.default = Student;
