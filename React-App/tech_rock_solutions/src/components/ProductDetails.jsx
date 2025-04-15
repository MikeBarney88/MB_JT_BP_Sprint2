import {useState, useEffect, useContext} from "react";
import {useLocation} from "react-router-dom";
import {ShoppingCartContext, findProduct} from "../context/conShoppingCart";
import Prebuilt1 from "../images/Prebuilt1.webp";


const ProductDetails = () => {
  const cart = useContext(ShoppingCartContext);
  const [product, setProduct] = useState();


  //Links to this page can carry an ID inside the location's state property, we can use this to our advantage.
  const {id} = useLocation().state;


  useEffect(()=>{
    async function getProduct() {
      const item = await findProduct(id);

      setProduct(item);
    }

    getProduct();
  }, [id]);


  return product === undefined ? (<main><div className="pc-header"><h1>Product Details</h1><br/><h2>Loading...</h2></div></main>) : (
    <main>
      <div className="pc-header">
        <h1>Product Details</h1>
      </div>

      <div className="card product-card">
        <img
          className="img-left"
          src={Prebuilt1}
          width="250vw"
          height="250vh"
          alt="Pc"
        />
        <br />
        <h3 className="text-right">PC Name: {product.pcname}</h3>
        <h4 className="text-right">In Stock: {product.stock}</h4>
        <br />
        <table className="specs-table">
          <tbody>
            <tr>
              <td className="spec-name">Operating System:</td>
              <td className="spec-value">{product.specs.os}</td>
            </tr>
            <tr>
              <td className="spec-name">Processor:</td>
              <td className="spec-value">{product.specs.processor}</td>
            </tr>
            <tr>
              <td className="spec-name">Mother Board:</td>
              <td className="spec-value">{product.specs.mobo}</td>
            </tr>
            <tr>
              <td className="spec-name">Graphics Card:</td>
              <td className="spec-value">{product.specs.graphics}</td>
            </tr>
            <tr>
              <td className="spec-name">Memory:</td>
              <td className="spec-value">{product.specs.memory}</td>
            </tr>
            <tr>
              <td className="spec-name">Storage:</td>
              <td className="spec-value">{product.specs.storage}</td>
            </tr>
            <tr>
              <td className="spec-name">USB Ports:</td>
              <td className="spec-value">{product.specs.ports}</td>
            </tr>
            <tr>
              <td className="spec-name">Connectivity:</td>
              <td className="spec-value">{product.specs.network}</td>
            </tr>
          </tbody>
        </table>

        <h2>Cost: {product.price}</h2>
        <br />
        <button id="spec-button" onClick={()=>cart.addToCart(undefined, product.pcname)}>Add to Cart</button>
      </div>
    </main>
  );
};
export default ProductDetails;
