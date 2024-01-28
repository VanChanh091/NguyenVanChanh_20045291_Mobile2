class Student {
  private name: string;
  private dob: Date;
  private math: number;
  private physical: number;
  private chemical: number;
  private literature: number;
  private english: number;

  constructor(name: string, dob: Date, math: number, physical: number, chemical: number, literature: number, english: number
  ) {
    this.setName(name);
    this.setDob(dob);
    this.setMath(math);
    this.setPhysical(physical);
    this.setChemical(chemical);
    this.setLiterature(literature);
    this.setEnglish(english);
  }

  getName(): string {
    return this.name;
  }

  getDob(): Date {
    return this.dob;
  }

  getMath(): number {
    return this.math;
  }

  getPhysical(): number {
    return this.physical;
  }

  getChemical(): number {
    return this.chemical;
  }

  getLiterature(): number {
    return this.literature;
  }

  getEnglish(): number {
    return this.english;
  }

  setName(name: string): void {
    if (name.length > 0) {
      this.name = name;
    } else {
      this.name = "XXX";
    }
  }

  setDob(dob: Date): void {
    this.dob = dob;
  }

  setMath(math: number): void {
    if (math > 0) {
      this.math = math;
    } else {
      this.math = 0;
    }
  }

  setPhysical(physical: number): void {
    if (physical > 0) {
      this.physical = physical;
    } else {
      this.physical = 0;
    }
  }

  setChemical(chemical: number): void {
    if (chemical > 0) {
      this.chemical = chemical;
    } else {
      this.chemical = 0;
    }
  }

  setLiterature(literature: number): void {
    if (literature > 0) {
      this.literature = literature;
    } else {
      this.literature = 0;
    }
  }

  setEnglish(english: number): void {
    if (english > 0) {
      this.english = english;
    } else {
      this.english = 0;
    }
  }

  tinhDtb():number{
    return (this.math+this.physical+this.chemical+this.literature+this.english)/5;
  }

  toString(): string {
    return `Name: ${this.name}, Dob: ${this.dob}, Math: ${this.math}, Physical: ${this.physical}, 
    Chemical:${this.chemical}, Literature:${this.literature}, English:${this.english}, DTB: ${this.tinhDtb()}\n`;
  }
}

export default Student;
