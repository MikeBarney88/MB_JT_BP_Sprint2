import React from "react";
import Accessories from "../components/Accessories";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe('Accessories', () => {
    render(<Accessories />);
    test('renders accessories list', () => {
      
      expect(screen.getByText('Razer Naga')).toBeInTheDocument();
      expect(screen.getByText('Razer Kraken Kitty')).toBeInTheDocument();
      expect(screen.getByText('Razer Black Widow')).toBeInTheDocument();
    });
    test('renders the Accessories page', () => {
  
      const headerElement = screen.getByText('Computer Accessories')
      expect(headerElement).toBeInTheDocument();
    });
})

