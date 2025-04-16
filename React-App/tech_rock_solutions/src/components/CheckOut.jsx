const CheckOut = ({prices}) => {
  const HST = 0.15;
  const subTotal = prices;
  const salesTax = Math.round(subTotal * HST, 2);
  const total = subTotal + salesTax;

  return (
    <div className="card checkoutInfo">
      <h2 className="cart-h2">Checkout:</h2>
      <br/>

      <h3>Subtotal: ${subTotal}</h3>
      <h3>HST({HST*100}%): ${salesTax.toFixed(2)}</h3>
      <h2>Total: ${total}</h2>

      <button>Purchase</button>
    </div>
  );
};
export default CheckOut;
