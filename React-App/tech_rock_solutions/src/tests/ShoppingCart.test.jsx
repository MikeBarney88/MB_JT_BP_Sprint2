import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";


describe("Shopping Cart", ()=>{
    render(<ShoppingCart/>);
    test("Cart renders correctly.", async function() {
        const cartHeader = screen.getByRole("heading", {level: 1});
        expect(cartHeader).toBeInTheDocument();
    });
});