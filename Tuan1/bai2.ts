class Vehicle {
    private owner: string;
    private typeCar: string;
    private valueCar: number;
    private cylinderCapacity: number;

    constructor(owner: string, typeCar: string, valueCar: number, cylinderCapacity: number){
        this.setOwner(owner);
        this.setTypeCar(typeCar);
        this.setValueCar(valueCar);
        this.setCylinderCapacity(cylinderCapacity);
    }

    getOwner(): String{
        return this.owner;
    }

    getTypeCar(): String{
        return this.typeCar;
    }

    getValueCar(): number{
        return this.valueCar;
    }

    getCylinderCapacity(): number{
        return this.cylinderCapacity;
    }

    setOwner(owner: string): void {
        if(owner.length > 0){
            this.owner = owner;
        }else{
            throw new Error("Khong duoc de trong");
        }
    }

    setTypeCar(type: string): void {
        if(type.length > 0){
            this.typeCar = type;
        }else{
            throw new Error("Khong duoc de trong");
        }
    }

    setValueCar(value: number): void {
        if(value > 0){
            this.valueCar = value;
        }else{
            throw new Error("Khong duoc nho hon 0");
        }
    }

    setCylinderCapacity(capacity: number): void {
        if(capacity > 0){
            this.cylinderCapacity = capacity;
        }else{
            throw new Error("Khong duoc nho hon 0");
        }
    }

    tinhTienThue(): number {
        if(this.cylinderCapacity < 100){
            return this.valueCar * 0.01;
        }else if(this.cylinderCapacity >= 100 && this.cylinderCapacity <= 200){
            return this.valueCar * 0.03;
        }else{
            return this.valueCar * 0.05;
        }
    }

    toString(): string{
        return `Tên chủ xe = ${this.owner}, Loại xe = ${this.typeCar}, Dung tích xi lanh = ${this.cylinderCapacity}, Giá trị xe = ${this.valueCar}, Tiền thuế = ${this.tinhTienThue()}`;
    }

}

function main_2(): void{
    const xe1 = new Vehicle('A', 'Xe hoi', 10000, 200);
    const xe2 = new Vehicle('B', 'Xe may', 2000, 90);
    const xe3 = new Vehicle('C', 'Xe hoi', 15000, 500);

    console.log(xe1.toString());
    console.log(xe2.toString());
    console.log(xe3.toString());
}

main_2();