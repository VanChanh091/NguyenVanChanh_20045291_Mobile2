import ChuyenXe from "./ChuyenXe";
import CXNgT from "./chuyenXeNgT";
import CXNT from "./chuyenXeNT";

class DsChuyenXe {
  private lst: Array<ChuyenXe>;

  constructor() {
    this.lst = new Array<ChuyenXe>();
  }

  getLst(): Array<ChuyenXe> {
    return this.lst;
  }

  setLst(list: Array<ChuyenXe>): void {
    this.lst = list;
  }

  addChuyenXe(cx: ChuyenXe): boolean {
    if (this.lst.indexOf(cx) == -1) {
      this.lst.push(cx);
      return true;
    }
    return false;
  }

  tinhTongDoanhThu(): number {
    let sum: number = 0;
    this.lst.forEach((Element) => {
      sum += Element.getDoanhThu();
    });
    return sum;
  }

  tinhTongDoanhThuCXNgT(): number {
    let sum: number = 0;
    this.lst.forEach((Element) => {
      if (ChuyenXe instanceof CXNgT) {
        sum += Element.getDoanhThu();
      }
    });
    return sum;
  }

  tinhTongDoanhThuCXNT(): number {
    let sum: number = 0;
    this.lst.forEach((Element) => {
        if (ChuyenXe instanceof CXNT) {
          sum += Element.getDoanhThu();
        }
      });
    return sum;
  }
}

function main(): void {
  let ds1: DsChuyenXe = new DsChuyenXe();

  ds1.addChuyenXe(new CXNgT("A01", "A", 2, 100000, "Long Khanh", 200));
  ds1.addChuyenXe(new CXNgT("A03", "C", 2, 200000, "Nha Trang", 400));

  ds1.addChuyenXe(new CXNT("A02", "B", 1, 200000, 10, 300));

  console.log(ds1);

  console.log(ds1.tinhTongDoanhThu());
}

main();
