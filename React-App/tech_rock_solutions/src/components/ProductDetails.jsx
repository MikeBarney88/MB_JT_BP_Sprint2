const ProductDetails = () => {
  return (
    <main>
      <div className="card product-card">
        <img src={null} alt="" />

        <h3>PC Name:</h3>
        <h1>Specs</h1>

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
              <td className="spec-name">Hard Drive:</td>
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
        <button id="spec-button">Add to Cart</button>
      </div>
    </main>
  );
};
export default ProductDetails;
