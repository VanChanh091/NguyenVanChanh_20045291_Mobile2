import Sach from "./Sach";

class SachGiaoKhoa extends Sach {
  private tinhTrang: string;

  constructor(
    maSach: string,
    ngayNhap: Date,
    donGia: number,
    soLuong: number,
    nxb: string,
    tinhTrang: string
  ) {
    super(maSach, ngayNhap, donGia, soLuong, nxb);
    this.setTinhTrang(tinhTrang);
  }

  getTinhTrang(): string {
    return this.tinhTrang;
  }

  setTinhTrang(tinhTrang: string): void {
    if (tinhTrang.length > 0) {
      this.tinhTrang = tinhTrang;
    } else {
      this.tinhTrang = "xxx";
    }
  }

  thanhTien(): number {
    if (this.tinhTrang === "moi") {
      return super.thanhTien();
    } else if (this.tinhTrang === "cu") {
      return super.thanhTien() * 0.5;
    }
    return 0;
  }

  toString(): string {
    return `${super.toString()}, Tinh Trang: ${this.tinhTrang}`;
  }
}

export default SachGiaoKhoa;
