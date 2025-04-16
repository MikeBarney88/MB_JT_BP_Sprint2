import ShoppingCart from "./ShoppingCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/conShoppingCart";

const CheckOut = ({ prices }) => {
  const cart = useContext(ShoppingCartContext);
  const HST = 0.15;
  const subTotal = prices;
  const salesTax = Math.round(subTotal * HST, 2);
  const total = subTotal + salesTax;

  return (
    <div className="card checkoutInfo">
      <h2 className="cart-h2">Checkout:</h2>
      <div className="receipt-box">
        <p>Your Receipt:</p>

        {cart.loading ? (
          <li>Loading...</li>
        ) : cart.cart.length === 0 ? (
          <li>Your receipt is empty.</li>
        ) : (
          cart.cart.map((item, index) => {
            return (
              <div>
                <li key={index}>
                  {item.name} &nbsp;
                  <label className="receipt" htmlFor={`quantity${item.id}`}>
                    Quantity: {item.quantity} &nbsp; Price:{" "}
                    {(item.price * item.quantity).toFixed(2)}
                  </label>
                </li>
              </div>
            );
          })
        )}
      </div>

      <div className="totals">
        <h3>Subtotal: ${subTotal.toFixed(2)}</h3>
        <h3>
          HST({HST * 100}%): ${salesTax.toFixed(2)}
        </h3>
        <h2>Total: ${total.toFixed(2)}</h2>

        <button
          className="checkout-button"
          onClick={() =>
            cart.cart.length === 0
              ? cart.showStatus("Your cart is empty.", false)
              : cart.showStatus("Thank you for your purchase!")
          }
        >
          Purchase
        </button>
      </div>
    </div>
  );
};
export default CheckOut;
