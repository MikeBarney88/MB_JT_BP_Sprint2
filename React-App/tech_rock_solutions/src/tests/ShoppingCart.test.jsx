import React from "react";
import {ShoppingCartProvider} from "../context/conShoppingCart";
import ShoppingCart from "../components/ShoppingCart";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";


describe("Shopping Cart", ()=>{
    render(<ShoppingCartProvider><ShoppingCart/><ShoppingCartProvider/>);
    test("Cart renders correctly.", function() {
        const cartHeader = screen.getByRole("heading", {level: 1});
        expect(cartHeader).toBeInTheDocument();
    });
});