import {useState, useEffect, createContext} from "react";
import {useLocation} from "react-router-dom";


export const ShoppingCartContext = createContext(null);


//Removes items from cart through via an id filter.
export async function removeFromCart(id, context) {
    await fetch(`http://localhost:3000/cart/${id}`, {method: "DELETE"});

    context.setCart(context.cart.filter((item)=>item.id !== id));
}


//Change quantity of the selected item in the cart.
export function changeQuantityCart(item, value, context) {
    if (value <= 0) {
        confirm(`Are you sure? Changing ${item.name}'s quantity to 0 will cause it to be removed from your cart.`) ? removeFromCart(item.id, context) : item.quantity = 1; document.querySelector(`#quantity${item.id}`).value = 1; return;
        
    } else {
        const restructuredItem = {...item, quantity: value};

        fetch(`http://localhost:3000/cart/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restructuredItem)
        });

        item.quantity = value;
    }
}


export function ShoppingCartProvider(props) {

    //Create state variables.
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState();


    //Get cart data from the server.
    useEffect(()=>{
        async function getServerData() {
            const res = await fetch("http://localhost:3000/cart", {method: "GET"});
            const data = await res.json();

            setCart(data);
            setLoading(false);
        }

        getServerData();
    }, [])


    //Adds the specified item to the cart based on button press.
    async function addToCart(e) {
        const selectedName = e.target.previousSibling.previousSibling.previousSibling.innerText;

        const res = await fetch("http://localhost:3000/products")
        const data = await res.json();

        let selectedProduct = (!data[0].pc.filter((c)=>c.pcname === selectedName).length > 0) ? data[0].accessories.filter((a)=>a.acname === selectedName)[0] : data[0].pc.filter((c)=> c.pcname === selectedName)[0];

        console.log(selectedProduct);
        fetch("http://localhost:3000/cart", {method: "POST", header: {"Content-Type": "application/json"}, body: JSON.stringify(selectedProduct)})
        
        setCart(selectedProduct);
    }


    return (
        <ShoppingCartContext.Provider value={{cart, setCart, loading, setLoading, addToCart}}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}