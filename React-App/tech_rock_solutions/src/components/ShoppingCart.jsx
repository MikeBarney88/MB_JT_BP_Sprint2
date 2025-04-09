import {useContext} from "react";
import {ShoppingCartContext} from "../context/conShoppingCart";

function ShoppingCart() {
    const cart = useContext(ShoppingCartContext);

    return (
        <div className="shoppingCartInfo">
            <h1>Your Shopping Cart:</h1>

            <div className="cartBox">
                {cart.loading ? (<li>Loading...</li>) : cart.cart.map((item, index)=>(
                    <li key={index}>{item.item1} <button onClick={(e)=>{removeFromCart(e.target.id)}}>Remove</button></li>
                ))}
            </div>
        </div>
    )
}

export default ShoppingCart;