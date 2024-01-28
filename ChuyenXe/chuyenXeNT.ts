import ChuyenXe from './ChuyenXe'

class CXNT extends ChuyenXe{
    private soTuyen: number;
    private soKmDiDuoc: number;
  
    constructor(
      maSoChuyen: string,
      hotenTaiXe: string,
      soXe: number,
      doanhThu: number,
      soTuyen: number,
     soKmDiDuoc: number
    ) {
      super(maSoChuyen, hotenTaiXe, soXe, doanhThu);
      this.setSoTuyen(soTuyen);
      this.setSoKmDiDuoc(soKmDiDuoc)
    }

    getSoTuyen():number{
        return this.soTuyen;
    }

    getSoKmDiDuoc():number{
        return this.soKmDiDuoc;
    }

    setSoTuyen(soTuyen: number):void{
        if (soTuyen > 0) {
            this.soTuyen = soTuyen;
          } else {
            this.soTuyen = soTuyen;
          }
    }

    setSoKmDiDuoc(soKmDiDuoc: number):void{
        if (soKmDiDuoc > 0) {
            this.soKmDiDuoc = soKmDiDuoc;
          } else {
            this.soKmDiDuoc = soKmDiDuoc;
          }
    }

    toString():string{
        return `${super.toString()}, So Tuyen: ${this.soTuyen}, So Km Di Duoc: ${this.soKmDiDuoc}`;
    }
}

export default CXNT;
