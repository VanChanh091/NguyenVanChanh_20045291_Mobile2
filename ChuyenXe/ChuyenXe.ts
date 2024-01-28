class ChuyenXe {
  private maSoChuyen: string;
  private hotenTaiXe: string;
  private soXe: number;
  private doanhThu: number;

  constructor(
    maSoChuyen: string,
    hotenTaiXe: string,
    soXe: number,
    doanhThu: number
  ) {
    this.setMaSoChuyen(maSoChuyen);
    this.setHotenTaiXe(hotenTaiXe);
    this.setSoXe(soXe);
    this.setDoanhThu(doanhThu);
  }

  getMaSoChuyen():string{
    return this.maSoChuyen;
  }

  getHotenTaiXe():string{
    return this.hotenTaiXe;
  }

  getSoXe():number{
    return this.soXe;
  }

  getDoanhThu():number{
    return this.doanhThu;
  }

  setMaSoChuyen(maSoChuyen: string):void{
    if(maSoChuyen.length > 0){
        this.maSoChuyen = maSoChuyen;
    }else{
        this.maSoChuyen = "XXX";
    }
  }

  setHotenTaiXe(hotenTaiXe: string):void{
    if(hotenTaiXe.length > 0){
        this.hotenTaiXe = hotenTaiXe;
    }else{
        this.hotenTaiXe = "XXX";
    }
  }

  setSoXe(soXe: number):void{
    if(soXe > 0){
        this.soXe = soXe;
    }else{
        this.soXe = 0;
    }
  }

  setDoanhThu(doanhThu: number):void{
    if(doanhThu > 0){
        this.doanhThu = doanhThu;
    }else{
        this.doanhThu = 0;
    }
  }

  toString():string{
    return `Ma So Chuyen: ${this.maSoChuyen}, Ho ten taixe: ${this.hotenTaiXe}, So xe: ${this.soXe}, Doanh thu: ${this.doanhThu}} \n`;
  }
}

export default ChuyenXe;