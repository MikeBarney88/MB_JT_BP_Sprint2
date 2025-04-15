import { useContext } from "react";
import {
  ShoppingCartContext,
  removeFromCart,
  changeQuantityCart,
} from "../context/conShoppingCart";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut";

function ShoppingCart() {
  const cart = useContext(ShoppingCartContext);

  return (
    <main>
      <div className="pc-header">
        <h1 className="cart-h1">Shopping Cart</h1>
      </div>
      <div className="card shoppingCartInfo">
        <h2 className="cart-h2">Your Shopping Cart:</h2>

        <div className="cartBox">
          {cart.loading ? (
            <li>Loading...</li>
          ) : cart.cart.length === 0 ? (
            <li>Your cart is empty.</li>
          ) : (
            cart.cart.map((item, index) => (
              <li key={index}>
                <Link
                  to="/ProductDetails"
                  state={{ id: `${item.name}` }}
                >
                  {item.name}
                </Link>
                &nbsp;
                <label htmlFor={`quantity${item.id}`}>Quantity:</label>{" "}
                <input
                  className="quantity"
                  type="number"
                  min="0"
                  defaultValue={item.quantity}
                  id={`quantity${item.id}`}
                  onChange={() => {
                    document.querySelector(`#quantity${item.id}`).blur();

                    changeQuantityCart(
                      item,
                      document.querySelector(`#quantity${item.id}`).value,
                      cart
                    );
                  }}
                />
                &nbsp;
                <button
                  className="cart-button"
                  onClick={() => {
                    removeFromCart(item.id, cart);
                  }}
                >
                  Remove
                </button>
                <li className="price">${item.price * item.quantity}</li>
              </li>
            ))
          )}
        </div>
      </div>

      <CheckOut />
    </main>
  );
}

export default ShoppingCart;
