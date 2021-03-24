class Bird {
  // Write your code here.
  age: number;

  constructor (age: number) {
    this.age = age;
  }

  sing(): void {
    console.log("Cui cui");
  }

  fly(nbSecond: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else if (this.age > 1 && this.age <= 3) {
      console.log(`The bird flew ${nbSecond} meters in ${nbSecond} seconds`);
    }else if (this.age > 3) {
      console.log(`The bird flew ${nbSecond * 2} meters in ${nbSecond} seconds`);
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
