export class Cat {
  name: string;
  color: string;
  age: number;

  constructor(name: string, color: string, age: number) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  purr() {
    return `${this.name}, the cat, purrs...`;
  }

  meow() {
    return `${this.name}, the ${this.color} cat, meows!`;
  }

  attack(withSuccess: boolean) {
    if (withSuccess) {
      console.log("You've been scratched!");
    } else {
      console.log(`Wow, ${this.name} missed you, how lucky!`);
    }
  }
}
