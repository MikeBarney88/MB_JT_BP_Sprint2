import Logo from "./Images/Logo.jpg";
import Prebuilt1 from "./Images/Prebuilt1.webp";
import Prebuilt2 from "./Images/Prebuilt2.webp";
import Prebuilt3 from "./Images/Prebuilt3.webp";
import Prebuilt4 from "./Images/Prebuilt4.avif";
import Prebuilt5 from "./Images/Prebuilt5.jfif";
import Prebuilt6 from "./Images/Prebuilt6.webp";
import Prebuilt7 from "./Images/Prebuilt7.jfif";
import Prebuilt8 from "./Images/Prebuilt8.jfif";
import Prebuilt9 from "./Images/Prebuilt9.jfif";

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
          <img src={Prebuilt1} width={200} height={200} alt="Pc1" />
          <br />
          <br />
          <p>Dildo - Ryzen 7 5700X3D | RTX 4070 Super | 32GB RAM | 2TB SSD</p>
        </div>
        <div className="card pc-card2">
          <img src={Prebuilt2} width={200} height={200} alt="" />
          <br />
          <br />
          <p>
            Quidi Vidi - Ryzen 7 7800X3D | Radeon RX 9070 | 32GB RAM | 2TB SSD
          </p>
        </div>
        <div className="card pc-card3">
          <img src={Prebuilt3} width={200} height={200} alt="" /> <br />
          <br />
          <p>
            Twillingate - Intel Core i7-13700F | RTX 4070 Super | 32GB RAM | 1TB
            SSD
          </p>
        </div>
        <div className="card pc-card4">
          <img src={Prebuilt4} width={200} height={200} alt="Pc1" />
          <br />
          <br />
          <p>CBS - Ryzen 7 7800X3D | RTX 4070 Super | 32GB RAM | 1TB SSD</p>
        </div>
        <div className="card pc-card5">
          <img src={Prebuilt5} width={200} height={200} alt="" />
          <br />
          <br />
          <p>
            Burin - Ryzen 7 9800X3D | RTX 4080 Super | 64GB RAM | 1TB + 2TB SSD
          </p>
        </div>
        <div className="card pc-card6">
          <img src={Prebuilt6} width={200} height={200} alt="" /> <br />
          <br />
          <p>Springdale - AMD Ryzen 7 7700 | RTX 4070 | 32GB RAM | 1TB SSD</p>
        </div>
        <div className="card pc-card7">
          <img src={Prebuilt7} width={200} height={200} alt="Pc1" />
          <br />
          <br />
          <p>
            Corner Brook - Intel Core i9-14900KF | RTX 4080 Super | 64GB RAM |
            2TB SSD
          </p>
        </div>
        <div className="card pc-card8">
          <img src={Prebuilt8} width={200} height={200} alt="" />
          <br />
          <br />
          <p>
            St. John's - Ryzen 7 7800X3D | RTX 4080 Super | 32GB RAM | 2TB SSD
          </p>
        </div>
        <div className="card pc-card9">
          <img src={Prebuilt9} width={200} height={200} alt="" /> <br />
          <br />
          <p>
            Cape Spear - Ryzen 7 7800X3D | RTX 4070 Ti Super | 32GB RAM | 1TB +
            1TB SSD
          </p>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
