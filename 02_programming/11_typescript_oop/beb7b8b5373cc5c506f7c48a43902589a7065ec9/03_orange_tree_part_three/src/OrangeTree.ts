import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  _age: number;
  _height: number;
  _alive: boolean;
  protected _oranges: string[] = [];
  constructor (age: number) {
    super(age);
  }
  // pas besoin du constructor car il herite de celui du parent

  get age(): number {
    return this._age;
  }
  get height(): number {
    return this._height;
  }
  get alive(): boolean {
    return this._alive;
  }
  get oranges():  string[]{
    return this._oranges;
  }
  
  
  ageOneYear(): void {
    this._age ++;
    this.isAlive();
    this.growOranges();
    if (this._age >= 1 && this._age <= 9){
      this._height = this._age * 25;
    }else if (this._age >= 10 && this._age <= 20) {
      const heighttemp = (this._age - 9) * 10;
      this._height = (9 * 25) + heighttemp;
    }else if (this._age > 20) {
      this._height = (9 * 25) + (11 * 10);
    }
  }

  isAlive(): boolean {
    const result = Math.random() * (101 - 50) + 50;
    if (this._age < 50) {
      return this._alive = true;
    }else if (result < this._age) {
      return this._alive = false;
    }else if (this._age >= 100 || result >= 100) {
      return this._alive = false;
    }
  }

  seed(): void {
    this._age = 0;
    this._height = 0;
    this._alive = true;
  }
  growOranges(): void {
    if (this._age > 4 && this._age <= 10) {
        this._oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    } else if (this._age > 10 && this._age <= 20) {
        this._oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    } else if (this._age > 20 && this._age <= 40) {
        this._oranges = ["🍊","🍊","🍊","🍊","🍊"];
    }
    
  }
  pickAnOrange(): void {
    this._oranges.pop();
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
