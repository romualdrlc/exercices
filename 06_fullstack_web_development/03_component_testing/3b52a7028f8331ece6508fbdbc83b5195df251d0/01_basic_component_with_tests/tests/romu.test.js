import {
  openBrowser,
  closeBrowser,
  goto,
  text,
  click,
  below,
  write,
  screenshot,
  waitFor,
  textBox,
  button,
} from "taiko";
import "regenerator-runtime/runtime";
import { cli } from "webpack";
describe("serie de test component HideOrNotHide", () => {
  jest.setTimeout(20000);

  const website = "http://localhost:8080";

  beforeAll(async () => {
    await openBrowser({ args: ["--window-size=1440,1000"], headless: true });
  });

  afterAll(async () => {
    await closeBrowser();
  });

  test("check that when launching the page, the paragraph This is my text is present", async () => {
    expect.assertions(1);

    await goto(website);
    expect(await text("This is my text").exists()).toBeTruthy();
  });

  test("if on clic le texte disparait", async () => {
    expect.assertions(1);

    await click("Hide content");
    expect(await text("").exists()).toBe(true);
  });

  test("if on reclic le text reapparait", async () => {
    expect.assertions(1);

    await click("Reveal content");
    expect(await text("This is my text").exists()).toBe(true);
  });
});
