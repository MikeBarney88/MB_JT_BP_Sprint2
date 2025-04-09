import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {ShoppingCartProvider} from "./context/conShoppingCart.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartProvider>
      <App/>
    </ShoppingCartProvider>
  </StrictMode>,
)
