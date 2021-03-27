import {greet} from "./index";

test("should 'greet' return Hello WORLD!",() => {
  //expect.assertions(2);
  expect(greet()).toBe("Hello WORLD!");
  expect(greet("Francis")).toBe("Hello FRANCIS!");
})