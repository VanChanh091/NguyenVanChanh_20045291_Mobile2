import Sach from "./Sach";

class SachThamKhao extends Sach {
  private thue: number;

  constructor(
    maSach: string,
    ngayNhap: Date,
    donGia: number,
    soLuong: number,
    nxb: string,
    thue: number
  ) {
    super(maSach, ngayNhap, donGia, soLuong, nxb);
    this.setThue(thue);
  }

  getThue(): number {
    return this.thue;
  }

  setThue(thue: number): void {
    if (thue > 0) {
      this.thue = thue;
    } else {
      this.thue = 0;
    }
  }

  thanhTien(): number {
      return super.thanhTien()*this.thue;
  }

  toString(): string {
    return `${super.toString()}, Thue: ${this.thue}`;
  }
}

export default  SachThamKhao;