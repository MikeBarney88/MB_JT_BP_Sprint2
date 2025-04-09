import {useState, useEffect, createContext} from "react";



export const ShoppingCartContext = createContext(null);

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