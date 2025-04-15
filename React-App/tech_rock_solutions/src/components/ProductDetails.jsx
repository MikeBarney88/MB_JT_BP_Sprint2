import {useLocation} from "react-router-dom";
import {findProduct} from "../context/conShoppingCart";
import Prebuilt1 from "../images/Prebuilt1.webp";

const ProductDetails = () => {
  //Links to this page can carry an ID inside the location's state property, we can use this to our advantage.
  const {id} = useLocation().state;
  const product = findProduct(id);
  

  return (
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
        <h3 className="text-right">PC Name:</h3>
        <h4 className="text-right">Quantity:</h4>
        <br />
        <table className="specs-table">
          <tbody>
            <tr>
              <td className="spec-name">Operating System:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Processor:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Mother Board:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Graphic Card:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Memory:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Storage:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">USB Ports:</td>
              <td className="spec-value"></td>
            </tr>
            <tr>
              <td className="spec-name">Connectivity:</td>
              <td className="spec-value"></td>
            </tr>
          </tbody>
        </table>

        <h2>Cost:</h2>
        <br />
        <button id="spec-button">Add to Cart</button>
      </div>
    </main>
  );
};
export default ProductDetails;
