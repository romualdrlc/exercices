import {helloSailor} from "./index";

test("a function", () => {
  const spy = jest.spyOn(console, "log");
  helloSailor("Captain Blackbeard");
  
  expect(spy).toBe("Captain Blackbeard");
});