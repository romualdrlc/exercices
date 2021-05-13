import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { App } from "../src/App";
import { Header, Body, Footer, Index } from "../src/components/product-card/header";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });
  test("renders App component", () => {
    screen.debug();
  });
  test("renders Headers component", () => {
    expect(screen.getByText("The Legend Of Zelda: Breath of the Wild").toBeInTheDocument());
  });

  test("renders Body component", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("renders Footer component", () => {});
  test("renders Index component", () => {});
});
