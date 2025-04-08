import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function ShoppingCart() {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState();


    useEffect(()=>{
        async function storeServerToCart() {
            const res = await fetch("http://localhost:3000/cart");

            const data = await res.json();

            setCart(data);
            setLoading(false);
        }


        storeServerToCart();
    }, [])


    return loading ? (<div className="cartBox"><li>Loading...</li></div>) : (
        <div className="cartBox">
            {cart.map((item, index)=>(
                <li key={index}>{item.item1}</li>
            ))}
        </div>
    )
}

export default ShoppingCart;