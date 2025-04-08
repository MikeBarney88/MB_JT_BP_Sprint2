import Logo from "./Images/Logo.jpg";
import Prebuilt1 from "./Images/Prebuilt1.webp";
import Prebuilt2 from "./Images/Prebuilt2.webp";
import Prebuilt3 from "./Images/Prebuilt3.webp";
import Prebuilt4 from "./Images/Prebuilt4.avif";
import Prebuilt5 from "./Images/Prebuilt5.avif";
import Prebuilt6 from "./Images/Prebuilt6.webp";
import Prebuilt7 from "./Images/Prebuilt7.webp";
import Prebuilt8 from "./Images/Prebuilt8.webp";
import Prebuilt9 from "./Images/Prebuilt9.png";

function App() {
  return (
    <>
      <header>
        <div className="header-img">
          <img src={Logo} width={50} height={50} alt="" />
        </div>
      </header>

      <nav></nav>

      <main>
        <div className=" pc-header">
          <p>Ready to Ship Computers</p>
        </div>

        <div className="card pc-card1">
          <img src={Prebuilt1} width={180} height={180} alt="Pc1" />

          <br />
          <h3>Dildo</h3>
          <p>Ryzen 7 5700X3D | RTX 4070 Super | 32GB RAM | 2TB SSD</p>

          <p>$1999.99</p>
          <button id="pc-button">Add to Cart</button>
        </div>
        <div className="card pc-card2">
          <img src={Prebuilt2} width={180} height={180} alt="Pc2" />
          <br />
          <h3>Quidi Vidi</h3>
          <p>Ryzen 7 7800X3D | Radeon RX 9070 | 32GB RAM | 2TB SSD</p>
          <br />
          <p>$2399.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card3">
          <img src={Prebuilt3} width={180} height={180} alt="Pc3" />
          <br />
          <h3>Twillingate</h3>
          <p>Intel Core i7-13700F | RTX 4070 Super | 32GB RAM | 1TB SSD</p>
          <br />
          <p>$2599.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card4">
          <img src={Prebuilt4} width={180} height={180} alt="Pc4" />
          <br />
          <h3>CBS</h3>
          <p>Ryzen 7 7800X3D | RTX 4070 Super | 32GB RAM | 1TB SSD</p>
          <br />
          <p>$2899.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card5">
          <img src={Prebuilt5} width={180} height={180} alt="Pc5" />
          <br />
          <h3>Burin</h3>
          <p>- Ryzen 7 9800X3D | RTX 4080 Super | 64GB RAM | 1TB + 2TB SSD</p>
          <br />
          <p>$2999.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card6">
          <img src={Prebuilt6} width={180} height={180} alt="Pc6" />
          <br />
          <h3>Springdale</h3>
          <p>AMD Ryzen 7 7700 | RTX 4070 | 32GB RAM | 1TB SSD</p>
          <br />
          <p>$3199.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card7">
          <img src={Prebuilt7} width={180} height={180} alt="Pc7" />
          <br />
          <h3>Corner Brook</h3>
          <p>Intel Core i9-14900KF | RTX 4080 Super | 64GB RAM | 2TB SSD</p>
          <br />
          <p>$3399.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card8">
          <img src={Prebuilt8} width={180} height={180} alt="Pc8" />
          <br />
          <h3>St. John's</h3>
          <p>Ryzen 7 7800X3D | RTX 4080 Super | 32GB RAM | 1TB + 2TB SSD</p>
          <br />
          <p>$3799.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="card pc-card9">
          <img src={Prebuilt9} width={180} height={180} alt="Pc9" />
          <br />
          <h3>Cape Spear</h3>
          <p>Ryzen 7 7800X3D | RTX 4070 Ti Super | 32GB RAM | 1TB + 1TB SSD</p>
          <br />
          <p>$5999.99</p>
          <button>Add to Cart</button>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
