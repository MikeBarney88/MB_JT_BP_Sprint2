import { useContext } from "react";
import {
  ShoppingCartContext,
  removeFromCart,
} from "../context/conShoppingCart";

function ShoppingCart() {
  const cart = useContext(ShoppingCartContext);

  return (
    <main>
      <div className="shoppingCartInfo">
        <h1>Your Shopping Cart:</h1>

        <div className="cartBox">
          {cart.loading ? (
            <li>Loading...</li>
          ) : (
            cart.cart.map((item, index) => (
              <li key={index}>
                {item.name}{" "}
                <button
                  onClick={() => {
                    removeFromCart(item.id, cart);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default ShoppingCart;
