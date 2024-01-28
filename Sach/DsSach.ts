import Sach from "./Sach";
import Sgk from "./Sgk";
import Stk from "./Stk";

class DsSach {
  private lst: Array<Sach>;

  constructor() {
    this.lst = new Array<Sach>();
  }

  getLst(): Array<Sach> {
    return this.lst;
  }

  setLst(list: Array<Sach>): void {
    this.lst = list;
  }

  addSach(sach: Sach): boolean {
    if (this.lst.indexOf(sach) == -1) {
      this.lst.push(sach);
      return true;
    }
    return false;
  }

  tinhTbGiaStk(): number {
    let price = 0;
    let count = 0;
    for (const sach of this.lst) {
      if (sach instanceof Stk) {
        price += sach.getDonGia();
        count++;
      }
    }
    return count > 0 ? price / count : 0;
  }

  tinhTongTienTheoSGK(): number {
    let totalPrice = 0;
    for (const sach of this.lst) {
      if (sach instanceof Sgk) {
        totalPrice += sach.thanhTien();
      }
    }
    return totalPrice;
  }

  tinhTongTienTheoStk(): number {
    let totalPrice = 0;
    for (const sach of this.lst) {
      if (sach instanceof Stk) {
        totalPrice += sach.thanhTien();
      }
    }
    return totalPrice;
  }
}

function main(): void {
  let list: DsSach = new DsSach();

  let sgk1 = new Sgk("A1", new Date("2018-10-3"), 150000, 5, "Nhi Dong", "cu");
  let sgk2 = new Sgk(
    "A2",
    new Date("2020-10-23"),
    100000,
    10,
    "Kim Dong",
    "moi"
  );

  let stk1 = new Stk("B1", new Date("2020-10-1"), 100000, 6, "X", 10);
  let stk2 = new Stk("B1", new Date("2019-12-15"), 120000, 10, "X", 20);

  list.addSach(sgk1);
  list.addSach(sgk2);
  list.addSach(stk1);
  list.addSach(stk2);

  console.log(list);
  console.log(list.tinhTbGiaStk());
  console.log(list.tinhTongTienTheoSGK());
  console.log(list.tinhTongTienTheoStk());
}

main();
