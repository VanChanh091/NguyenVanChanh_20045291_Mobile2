class Coordinates {
  private name: string;
  private x: number;
  private y: number;

  constructor(name: string, x: number, y: number) {
    this.setName(name);
    this.setX(x);
    this.setY(y);
  }

  getName(): string {
    return this.name;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  setName(name: string): void {
    if (name.length > 0) {
      this.name = name;
    } else {
      this.name = "Chua biet";
    }
  }

  setX(x: number): void {
    if (x > 0) {
      this.x = x;
    } else {
      this.x = 0;
    }
  }

  setY(y: number): void {
    if (y > 0) {
      this.y = y;
    } else {
      this.y = 0;
    }
  }

  toString():string{
    return `${this.name}(${this.x}/${this.y})`;
    // return `Ten:${this.name}, X:${this.x}, Y:${this.y}`;
  }
  
}

export default Coordinates;
