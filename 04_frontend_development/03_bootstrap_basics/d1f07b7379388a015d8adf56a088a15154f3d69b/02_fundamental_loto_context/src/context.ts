import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  // Code the function here
  const result = lottery_draw();

  for (let i = 0; i < ticket.length; i++) {
    if (ticket[i] === result[i]) {
      console.log("You won");
    } else {
      console.log("You lost...");
    }
  }
}
