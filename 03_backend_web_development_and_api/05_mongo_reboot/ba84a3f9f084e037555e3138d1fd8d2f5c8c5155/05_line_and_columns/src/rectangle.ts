import { line } from "./line";
import { column } from "./column";

export function rectangle(width: number, height: number): string {
  // let recligne = "";
  // let recolonne = "";
  // recligne = line(width);
  // recolonne = column(height, recligne);

  // return recolonne;

  return column(height, line(width));
}
