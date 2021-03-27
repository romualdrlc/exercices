import {toWords} from "./index";

test("decomposer une phrase en liste de mot", () => {
  expect.assertions(1)
  expect(toWords("il fait chaud")).toMatchObject([ "il","fait","chaud" ]);
})