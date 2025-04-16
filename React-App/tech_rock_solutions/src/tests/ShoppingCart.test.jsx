import React from "react";
import {useContext} from "react";
import {ShoppingCartContext, ShoppingCartProvider} from "../context/conShoppingCart";
import ShoppingCart from "../components/ShoppingCart";
import {BrowserRouter} from "react-router-dom";
import {test, expect, describe} from "vitest";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";


describe("Shopping Cart", ()=>{
    function CartWithContext() {
        const {cart, setCart, loading, setLoading, addToCart} = useContext(ShoppingCartContext);

        return (<ShoppingCart/>);
    }


    render(
        <ShoppingCartProvider>
            <BrowserRouter>
                <CartWithContext/>
            </BrowserRouter>
        </ShoppingCartProvider>
    );


    test("Page renders correctly.", function() {
        const cartHeader = screen.getByRole("heading", {level: 1});
        expect(cartHeader).toBeInTheDocument();
    });


    test("Cart displays empty message properly.", async function() {
        const cartEmptyMsg = await screen.findByRole("listitem", {timeout: 2000});
        expect(cartEmptyMsg.textContent === "Your cart is empty.").toBeInTheDocument();
    });
});