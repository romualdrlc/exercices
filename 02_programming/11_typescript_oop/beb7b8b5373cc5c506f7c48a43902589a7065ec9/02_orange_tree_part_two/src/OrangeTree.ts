import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  age: number;
  height: number;
  alive: boolean;
  oranges: string[] = [];
  constructor (age: number) {
    super(age);
  }
  // pas besoin du constructor car il herite de celui du parent

  ageOneYear(): void {
    this.age ++;
    this.isAlive();
    this.growOranges();
    if (this.age >= 1 && this.age <= 9){
      this.height = this.age * 25;
    }else if (this.age >= 10 && this.age <= 20) {
      const heighttemp = (this.age - 9) * 10;
      this.height = (9 * 25) + heighttemp;
    }else if (this.age > 20) {
      this.height = (9 * 25) + (11 * 10);
    }
  }

  isAlive(): boolean {
    const result = Math.random() * (101 - 50) + 50;
    if (this.age < 50) {
      return this.alive = true;
    }else if (result < this.age) {
      return this.alive = false;
    }else if (this.age >= 100 || result >= 100) {
      return this.alive = false;
    }
  //   // }else if(result > this.age) {
  //     return this.alive = true;
  //   }
  //  }else if (this.age >= 100 || result >= 100) {
  //   //   return this.alive = false;
  //   // }
  }


  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
  growOranges(): void {
    if (this.age > 4 && this.age <= 10) {
        this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    } else if (this.age > 10 && this.age <= 20) {
        this.oranges = ["🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊","🍊"];
    } else if (this.age > 20 && this.age <= 40) {
        this.oranges = ["🍊","🍊","🍊","🍊","🍊"];
    }
    
  }
  pickAnOrange(): void {
    this.oranges.pop();
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
