import {useState, useEffect, createContext} from "react";


export const ShoppingCartContext = createContext(null);


//Removes items from cart through via an id filter.
export function removeFromCart(id, context) {

    context.setCart(context.cart.filter((item)=>{item.id !== id}));
}


//Change quantity of the selected item in the cart.
export function changeQuantityCart(id, value) {

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


    return (
        <ShoppingCartContext.Provider value={{cart, setCart, loading, setLoading}}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}