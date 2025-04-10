const ProductDetails = () => {
  return (
    <main>
      <div className="card product-card">
        <img src={null} alt="" />
        <br />
        <h3>Pc Name:</h3>
        <br />
        <h1>Specs</h1>
        <br />
        <hr />
        <h4 className="h4-left">Operating System: </h4>
        <hr />
        <h4 className="h4-left">Processor: </h4>
        <hr />
        <h4 className="h4-left">Mother Board: </h4>
        <hr />
        <h4 className="h4-left">Graphic Card: </h4>
        <hr />
        <h4 className="h4-left">Memory: </h4>
        <hr />
        <h4 className="h4-left">Hard Drive:</h4>
        <hr />
        <h4 className="h4-left">USB Ports:</h4>
        <hr />
        <h4 className="h4-left">Connectivity:</h4>
        <hr />
        <br />
        <h2>Cost:</h2>
        <br />
        <button id="spec-button">Add to Cart</button>
      </div>
    </main>
  );
};
export default ProductDetails;
