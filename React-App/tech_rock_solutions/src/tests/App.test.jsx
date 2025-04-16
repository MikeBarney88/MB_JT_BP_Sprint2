import React from "react";
import App from "../App";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("App", () => {
  render(<App />);

  test("Text renders correctly", () => {
    const nameElement = screen.getByText("Dildo", {
      name: "Dildo",
    });
    expect(nameElement).toBeInTheDocument();
  });

  test("Page renders correctly", () => {
    const pageHeading = screen.getAllByRole("heading", {
      level: 1,
    });
    expect(pageHeading[0]).toBeInTheDocument();
  });
});
