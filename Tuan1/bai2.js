var Vehicle = /** @class */ (function () {
    function Vehicle(owner, typeCar, valueCar, cylinderCapacity) {
        this.owner = owner;
        this.typeCar = typeCar;
        this.valueCar = valueCar;
        this.cylinderCapacity = cylinderCapacity;
    }
    Vehicle.prototype.getOwner = function () {
        return this.owner;
    };
    Vehicle.prototype.getTypeCar = function () {
        return this.typeCar;
    };
    Vehicle.prototype.getValueCar = function () {
        return this.valueCar;
    };
    Vehicle.prototype.getCylinderCapacity = function () {
        return this.cylinderCapacity;
    };
    Vehicle.prototype.setOwner = function (owner) {
        if (owner.length > 0) {
            this.owner = owner;
        }
        else {
            throw new Error("Khong duoc de trong");
        }
    };
    Vehicle.prototype.setTypeCar = function (type) {
        if (type.length > 0) {
            this.typeCar = type;
        }
        else {
            throw new Error("Khong duoc de trong");
        }
    };
    Vehicle.prototype.setValueCar = function (value) {
        if (value > 0) {
            this.valueCar = value;
        }
        else {
            throw new Error("Khong duoc nho hon 0");
        }
    };
    Vehicle.prototype.setCylinderCapacity = function (capacity) {
        if (capacity > 0) {
            this.cylinderCapacity = capacity;
        }
        else {
            throw new Error("Khong duoc nho hon 0");
        }
    };
    Vehicle.prototype.tinhTienThue = function () {
        if (this.cylinderCapacity < 100) {
            return this.valueCar * 0.01;
        }
        else if (this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200) {
            return this.valueCar * 0.03;
        }
        else {
            return this.valueCar * 0.05;
        }
    };
    Vehicle.prototype.toString = function () {
        return "T\u00EAn ch\u1EE7 xe = ".concat(this.owner, ", Lo\u1EA1i xe = ").concat(this.typeCar, ", Dung t\u00EDch xi lanh = ").concat(this.cylinderCapacity, ", \n        Gi\u00E1 tr\u1ECB xe = ").concat(this.valueCar, ", Ti\u1EC1n thu\u1EBF = ").concat(this.tinhTienThue());
    };
    return Vehicle;
}());
function main_2() {
    var xe1 = new Vehicle('A', 'Xe hoi', 10000, 200);
    var xe2 = new Vehicle('B', 'Xe may', 2000, 90);
    var xe3 = new Vehicle('C', 'Xe hoi', 15000, 500);
    console.log(xe1.toString());
    console.log(xe2.toString());
    console.log(xe3.toString());
}
main_2();
