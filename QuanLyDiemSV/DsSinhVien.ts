import SinhVien from './sinhVien'

class DsSinhVien{
    private list: Array<SinhVien>;

    constructor(){
        this.list = new Array<SinhVien>;
    }

    getList():Array<SinhVien>{
        return this.list;
    }

    setList(list: Array<SinhVien>):void{
        this.list = list;
    }

    addStudent(sinhVien:SinhVien):boolean{
        // this.dsSinhVien.push(sinhVien);
        if(this.list.indexOf(sinhVien)==-1){
            this.list.push(sinhVien);
            return true;
        }
        return false;
    }
}

function main():void{
    let list = new DsSinhVien();

    let st1 = new SinhVien("A", new Date(1999, 20, 1), 9, 8,7, 9, 6);
    let st2 = new SinhVien("B", new Date(1998, 11, 10), 9, 5,6, 5, 6);
    
    list.addStudent(st1);
    list.addStudent(st2);

    console.log(list);
    
}

main();