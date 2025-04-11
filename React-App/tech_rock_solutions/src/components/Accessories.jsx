import CorsairHS70 from "../images/CorsairHS70.avif";
import CorsairK70 from "../images/CorsairK70.avif";
import CorsairScim from "../images/CorsairScim.avif";
import LogitechYeti from "../images/LogitechYeti.avif";
import LogitechK750 from "../images/LogitechK750.avif";
import LogitechG502 from "../images/LogitechG502.avif";
import RazerKitty from "../images/RazerKitty.avif";
import RazerBWidow from "../images/RazerBWidow.avif";
import RazerNaga from "../images/RazerNaga.avif";

function Accessories() {
  return (
    <>
      <main>
        <div className="pc-header">
          <h1>The Best and Baddest Computer Accessories</h1>
        </div>
        <div className="card pc-card1">
          <img src={CorsairHS70} width="50%" height="50%" alt="Pc1" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair HS70</p>
          <br />
          <h3 className="card-h3">$100.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card2">
          <br />

          <img src={CorsairK70} width="50%" height="50%" alt="Pc2" />
          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair K70</p>
          <br />
          <h3 className="card-h3">$200.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card3">
          <img src={CorsairScim} width="50%" height="50%" alt="Pc3" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Corsair Scimitar</p>
          <br />
          <h3 className="card-h3">$199.99</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card4">
          <img src={LogitechYeti} width="50%" height="50%" alt="Pc4" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Logitech Yeti</p>
          <br />
          <h3 className="card-h3">$424.99</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card5">
          <img src={LogitechK750} width="50%" height="50%" alt="Pc5" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Logitech K750</p>
          <br />
          <h3 className="card-h3">$100.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card6">
          <img src={LogitechG502} width="50%" height="50%" alt="Pc6" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Logitech G502</p>
          <br />
          <h3 className="card-h3">$200.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card7">
          <img src={RazerKitty} width="50%" height="50%" alt="Pc7" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Kraken Kitty</p>
          <br />
          <h3 className="card-h3">$300.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card8">
          <img src={RazerBWidow} width="50%" height="50%" alt="Pc8" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Black Widow</p>
          <br />
          <h3 className="card-h3">$250.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card9">
          <img src={RazerNaga} width="50%" height="50%" alt="Pc9" />

          <br />
          <h3 className="card-h3"></h3>
          <p>Razer Naga</p>
          <br />
          <h3 className="card-h3">$150.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>
      </main>
    </>
  );
}
export default Accessories;
