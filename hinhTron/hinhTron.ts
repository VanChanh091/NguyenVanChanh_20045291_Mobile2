// tslint:disable:no-unused-variable
import ToaDo from "../hinhTron/toaDo";

class Circle {
  private tam: ToaDo;
  private banKinh: number;

  constructor(tam: ToaDo, banKinh: number) {
    this.setTam(tam);
    this.setBanKinh(banKinh);
  }

  getTam(): ToaDo {
    return this.tam;
  }

  getBanKinh(): number {
    return this.banKinh;
  }

  setTam(toaDo: ToaDo): void {
    this.tam = toaDo;
  }

  setBanKinh(banKinh: number): void {
    if (banKinh > 0) {
      this.banKinh = banKinh;
    } else {
      this.banKinh = 0;
    }
  }

  tinhChuVi(): number {
    return this.banKinh * 2 * Math.PI;
  }

  tinhDienTich(): number {
    return Math.PI * (this.banKinh * this.banKinh);
  }

  toString(): string {
    return `Hinh tron co tam ${this.tam} voi ban kinh ${this.banKinh} 
        co dien tich va chu vi lan luot la ${this.tinhChuVi()} va ${this.tinhDienTich()}`;
  }
}

function main_4(): void {
  const toaDo_1 = new ToaDo("A", 3, 5);
  const circle_1 = new Circle(toaDo_1, 15);

  console.log(circle_1.toString());
}

main_4();
