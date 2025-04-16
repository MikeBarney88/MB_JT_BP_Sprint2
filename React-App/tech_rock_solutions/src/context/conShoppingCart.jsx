import {useState, useEffect, createContext} from "react";


export const ShoppingCartContext = createContext(null);

//Gets product info for ProductDetails.
export async function findProduct(id) {
    const res = await fetch(`http://localhost:3000/products`);
    const allProducts = await res.json();
    const foundProduct = allProducts[0].pc.filter((c)=>c.name === id)[0];

    return foundProduct;
}

//Removes items from cart through via an id filter.
export async function removeFromCart(id, context) {
    await fetch(`http://localhost:3000/cart/${id}`, {method: "DELETE"});

    context.setCart(context.cart.filter((item)=>item.id !== id));

    context.showStatus("Item removed from cart.");
}


//Change quantity of the selected item in the cart.
export function changeQuantityCart(item, value, context) {
    if (value <= 0) {
        confirm(`Are you sure? Changing ${item.name}'s quantity to 0 will cause it to be removed from your cart.`) ? removeFromCart(item.id, context) : item.quantity = 1; document.querySelector(`#quantity${item.id}`).value = 1; return;
        
    } else {
        if ((item.quantity > item.stock) || (value > item.stock)) {
            try {
                alert(`Sorry, we only have ${item.stock} of ${item.name} in stock at the moment. You can only order ${item.stock} or less at this time.`);
                item.quantity = value - 1; 
                document.querySelector(`#quantity${item.id}`).value = value - 1;
            } catch (error) {
                null;
            }
            return;
        }
        const restructuredItem = {...item, quantity: value};

        try {
            context.setLoading(true);
        } catch (error) {
            null;
        }

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

        if (loading === true) {
            getServerData();
        }
    }, [loading])


    //Function for showing successful/failed interaction alerts.
    function showStatus(msg, tone=true) {
        const div = document.createElement("div");

        div.style.cssText = 
        `position: fixed;
        width: 20%;
        z-index: 1;
        background-color: ${tone ? "lightgreen" : "red"};
        border: 0.24vh solid black;
        border-radius: 0.8vh;
        padding: 0.3vh;
        top: 15%;
        left: 40%;
        overscroll-behavior: hidden;
        box-shadow: 1px 1px black;
        text-align: center;
        font-size: 1.5vw;
        font-weight: 700;`;

        div.innerText = msg;
        document.body.appendChild(div);

        setTimeout(()=>document.body.removeChild(div), 1500);
    }


    //Adds the specified item to the cart based on button press.
    async function addToCart(e, iname=undefined) {
        const selectedName = iname || e.target.previousSibling.previousSibling.previousSibling.innerText;

        const res = await fetch("http://localhost:3000/products")
        const data = await res.json();
        const productsPC = data[0].pc;
        const productsAC = data[0].accessories;

        const productsCombined = [...productsPC, ...productsAC];

        let selectedProduct = productsCombined.filter((p)=>p.name === selectedName)[0];

        if (cart.filter((c)=>c.name === selectedProduct.name).length === 0) {
            fetch("http://localhost:3000/cart", {method: "POST", header: {"Content-Type": "application/json"}, body: JSON.stringify({...selectedProduct, quantity: "1"})})

            showStatus("Item added to cart.");
        } else {
            const cartProduct = cart.filter((c)=>c.id === selectedProduct.id)[0];

            const valueDeterminer = parseInt(cartProduct.quantity) + 1
            changeQuantityCart(cartProduct, valueDeterminer.toString(), ShoppingCartContext) ? showStatus("Item added to cart.") : null;
        }
        
        setCart(selectedProduct);
        setLoading(true);
    }

    return (
        <ShoppingCartContext.Provider value={{cart, setCart, loading, setLoading, addToCart, showStatus}}>
            {props.children}
        </ShoppingCartContext.Provider>
    )
}