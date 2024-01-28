class Sach {
  private maSach: string;
  private ngayNhap: Date;
  private donGia: number;
  private soLuong: number;
  private nxb: string;

  constructor(
    maSach: string,
    ngayNhap: Date,
    donGia: number,
    soLuong: number,
    nxb: string
  ) {
    this.setMaSach(maSach);
    this.setNgayNhap(ngayNhap);
    this.setDonGia(donGia);
    this.setSoLuong(soLuong);
    this.setNxb(nxb);
  }

  getMaSach(): string {
    return this.maSach;
  }

  getNgayNhap(): Date {
    return this.ngayNhap;
  }

  getDonGia(): number {
    return this.donGia;
  }

  getSoLuong(): number {
    return this.soLuong;
  }

  getNxb(): string {
    return this.nxb;
  }

  setMaSach(maSach: string): void {
    if (maSach.length > 0) {
      this.maSach = maSach;
    } else {
      this.maSach = "xxx";
    }
  }

  setNgayNhap(ngayNhap: Date): void {
    this.ngayNhap = ngayNhap;
  }

  setDonGia(donGia: number): void {
    if (donGia > 0) {
      this.donGia = donGia;
    } else {
      this.donGia = 0;
    }
  }

  setSoLuong(soLuong: number): void {
    if (soLuong > 0) {
      this.soLuong = soLuong;
    } else {
      this.soLuong = 0;
    }
  }

  setNxb(nxb: string): void {
    if (nxb.length > 0) {
      this.nxb = nxb;
    } else {
      this.nxb = "xxx";
    }
  }

  thanhTien(): number {
    return this.soLuong * this.donGia;
  }

  toString(): string {
    return `maSach: ${this.maSach},
    ngayNhap: ${this.ngayNhap},
    donGia: ${this.donGia},
    soLuong: ${this.soLuong},
    nxb: ${this.nxb},
    ThanhTien: ${this.thanhTien()}`;
  }
}

export default Sach;
