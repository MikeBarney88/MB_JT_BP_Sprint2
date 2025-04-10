import CorsairHS70 from "../images/CorsairHS70.jpg";
import CorsairK70 from "../images/CorsairK70.jpg";
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
          <p>Corsair Poopie Headset</p>
          <br />
          <h3 className="card-h3">$1,000,000.00</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card2"></div>

        <div className="card pc-card3"></div>

        <div className="card pc-card4"></div>

        <div className="card pc-card5"></div>

        <div className="card pc-card6"></div>

        <div className="card pc-card7"></div>

        <div className="card pc-card8"></div>

        <div className="card pc-card9"></div>
      </main>
    </>
  );
}
export default Accessories;
