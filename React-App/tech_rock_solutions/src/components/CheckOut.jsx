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
      <div className="recipt-box">
        <p>Your Receipt:</p>

        {cart.loading ? (
          <li>Loading...</li>
        ) : cart.cart.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          cart.cart.map((item, index) => {
            return (
              <li key={index}>
                {item.name} &nbsp;
                <label htmlFor={`quantity${item.id}`}>
                  Quantity: {item.quantity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Price: {(item.price * item.quantity).toFixed(2)}
                </label>
              </li>
            );
          })
        )}
      </div>

      <div className="totals">
        <h3>Subtotal: ${subTotal}</h3>
        <h3>
          HST({HST * 100}%): ${salesTax.toFixed(2)}
        </h3>
        <h2>Total: ${total}</h2>

        <button className="checkout-button">Purchase</button>
      </div>
    </div>
  );
};
export default CheckOut;
