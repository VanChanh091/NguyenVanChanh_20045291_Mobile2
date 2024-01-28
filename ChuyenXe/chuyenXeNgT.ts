import ChuyenXe from './ChuyenXe'

class CXNgT extends ChuyenXe {
  private noiDen: string;
  private soNgayDiDuoc: number;

  constructor(
    maSoChuyen: string,
    hotenTaiXe: string,
    soXe: number,
    doanhThu: number,
    noiDen: string,
    soNgayDiDuoc: number
  ) {
    super(maSoChuyen, hotenTaiXe, soXe, doanhThu);
    this.setNoiDen(noiDen);
    this.setSoNgayDiDuoc(soNgayDiDuoc);
  }

  getNoiDen(): string {
    return this.noiDen;
  }

  getSoNgayDiDuoc(): number {
    return this.soNgayDiDuoc;
  }

  setNoiDen(noiDen: string): void {
    if (noiDen.length > 0) {
      this.noiDen = noiDen;
    } else {
      this.noiDen = noiDen;
    }
  }

  setSoNgayDiDuoc(soNgayDiDuoc: number): void {
    if (soNgayDiDuoc > 0) {
      this.soNgayDiDuoc = soNgayDiDuoc;
    } else {
      this.soNgayDiDuoc = soNgayDiDuoc;
    }
  }

  toString():string{
    return `${super.toString()}, Noi Den: ${this.noiDen}, So Ngay Di Duoc: ${this.soNgayDiDuoc}`;
  }
}

export default CXNgT;
