type ParamRest = string[];
type CallbackType = (...restParam: ParamRest) => void;

export function contextFunction(greetEveryone: CallbackType, parameters: ParamRest): void {
  // Code your function here
  console.log("Welcome greet :");
  greetEveryone(...parameters);
}
