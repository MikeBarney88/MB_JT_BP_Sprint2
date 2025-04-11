import CorsairHS70 from "../images/CorsairHS70.avif";
import CorsairK70 from "../images/CorsairK70.avif";
import CorScim from "../images/CorScim.jpg";
import LogitechG502 from "../images/LogitechG502.jpg";
import LogitechMK370 from "../images/LogitechMK370.jpg";
import RazerBWidow from "../images/RazerBWidow.jpg";
import RazerKitty from "../images/RazerKitty.jpg";
import RazerNaga from "../images/RazerNaga.jpg";
import ShureSM7B from "../images/ShureSM7B.jpg";

function Accessories() {
  return (
    <>
      <main>
        <div className="pc-header">
          <h1>The Best and Baddest Computer Accessories</h1>
        </div>
        <div className="card pc-card1">
          <img src={CorsairHS70} width={180} height={180} alt="Pc1" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair HS70</p>
          <br />
          <h3 className="card-h3">$100.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card2">
          <br />

          <img src={CorsairK70} width={180} height={150} alt="Pc2" />
          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair K70</p>
          <br />
          <h3 className="card-h3">$200.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card3">
          <img src={CorScim} width={180} height={180} alt="Pc3" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair Scimitar</p>
          <br />
          <h3 className="card-h3">$199.99</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card4">
          <img src={LogitechG502} width={180} height={180} alt="Pc4" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Logitech G502</p>
          <br />
          <h3 className="card-h3">$124.99</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card5">
          <img src={LogitechMK370} width={180} height={180} alt="Pc5" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Logitech MK370</p>
          <br />
          <h3 className="card-h3">$100.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card6">
          <img src={RazerBWidow} width={180} height={180} alt="Pc6" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Black Widow</p>
          <br />
          <h3 className="card-h3">$200.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card7">
          <img src={RazerKitty} width={180} height={180} alt="Pc7" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Kraken Kitty</p>
          <br />
          <h3 className="card-h3">$300.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card8">
          <img src={RazerNaga} width={180} height={180} alt="Pc8" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Naga</p>
          <br />
          <h3 className="card-h3">$150.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card9">
          <img src={ShureSM7B} width={180} height={180} alt="Pc9" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Shures SM7B</p>
          <br />
          <h3 className="card-h3">$600.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>
      </main>
    </>
  );
}
export default Accessories;
