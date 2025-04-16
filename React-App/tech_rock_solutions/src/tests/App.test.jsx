import React from "react";
import ProductDetails from "../components/ProductDetails";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("App", () => {
  render(<App />);

  test("Text renders correctly", () => {
    const nameElement = screen.getByText("Dildo", {
      name: "Dilod",
    });
    expect(nameElement).toBeInTheDocument();
  });

  test("Page renders correctly", () => {
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
  });
});
