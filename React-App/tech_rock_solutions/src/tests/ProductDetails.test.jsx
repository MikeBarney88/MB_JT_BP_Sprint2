import React from "react";
import ProductDetails from "../components/ProductDetails";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("ProductDetails", () => {
  render(<ProductDetails />);

  test("Page renders correctly", () => {
    const nameElement = screen.getByText("Dildo", {
      name: "Dildo",
    });
    expect(nameElement).toBeInTheDocument();
  });

  const pageHeading = screen.getByRole("heading", {
    level: 1,
  });
  expect(pageHeading).toBeInTheDocument();
});

// describe("Shopping Cart", ()=>{
//   function CartWithContext() {
//       const {cart, setCart, loading, setLoading, addToCart} = useContext(ShoppingCartContext);
//       return (<ShoppingCart/>);
//   }

//   render(
//       <ShoppingCartProvider>
//           <BrowserRouter>
//               <CartWithContext/>
//           </BrowserRouter>
//       </ShoppingCartProvider>
//   );

//   test("Page renders correctly.", function() {
//       const cartHeader = screen.getByRole("heading", {level: 1});
//       expect(cartHeader).toBeInTheDocument();
//   });

//   test("Cart displays empty message properly.", async function() {
//       const cartEmptyMsg = await screen.getByRole("listitem", {timeout: 2000}).textContent;
//       expect(cartEmptyMsg.textContent === "Your cart is empty.").toBeInTheDocument();
//   });
// });
