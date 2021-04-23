type ParamRest = string[];

export function greetEveryone(...string: ParamRest): void {
  // Code your function here
  string.forEach((x) => {
    console.log(`Welcome to ${x}`);
  });
}
