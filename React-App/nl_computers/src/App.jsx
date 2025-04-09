// Desc: Sprint2;
// Author: Joey, Michael, Brandon;
// Date: April, 7 - 16 2025

import Prebuilt1 from "./Images/Prebuilt1.webp";
import Prebuilt2 from "./Images/Prebuilt2.webp";
import Prebuilt3 from "./Images/Prebuilt3.webp";
import Prebuilt4 from "./Images/Prebuilt4.avif";
import Prebuilt5 from "./Images/Prebuilt5.avif";
import Prebuilt6 from "./Images/Prebuilt6.webp";
import Prebuilt7 from "./Images/Prebuilt7.webp";
import Prebuilt8 from "./Images/Prebuilt8.webp";
import Prebuilt9 from "./Images/Prebuilt9.png";
import Facebook from "./Images/Facebook.jpg";
import Instagram from "./Images/Instagram.jpg";
import Twitter from "./Images/Twitter.jpg";
import Youtube from "./Images/Youtube.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Components/ShoppingCart";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <p className="header-p">Fresh PreBuilt Computers from Da Rock</p>

        <br />
        <br />
        <nav>
          <Routes>
            <Route path="/cart" element={<ShoppingCart />} />
            {/* <Route path="/accessories" element={}/>
          <Route path="/details" element={}/> */}
          </Routes>
        </nav>
      </header>

      <main>
        <div className=" pc-header">
          <h1>Ready to Ship Computers</h1>
        </div>

        <div className="card pc-card1">
          <img src={Prebuilt1} width={180} height={180} alt="Pc1" />

          <br />
          <h3 className="card-h3">Dildo</h3>
          <p>Ryzen 7 5700X3D | RTX 4070 Super | 32GB RAM | 2TB SSD</p>
          <br />
          <h3 className="card-h3">$1999.99</h3>

          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card2">
          <img src={Prebuilt2} width={180} height={180} alt="Pc2" />
          <br />
          <h3 className="card-h3">Quidi Vidi</h3>
          <p>Ryzen 7 7800X3D | Radeon RX 9070 | 32GB RAM | 2TB SSD</p>
          <h3 className="card-h3">$2399.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card3">
          <img src={Prebuilt3} width={180} height={180} alt="Pc3" />
          <br />
          <h3 className="card-h3">Twillingate</h3>
          <p>Intel Core i7-13700F | RTX 4070 Super | 32GB RAM | 1TB SSD</p>
          <h3 className="card-h3">$2599.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card4">
          <img src={Prebuilt4} width={180} height={180} alt="Pc4" />
          <br />
          <h3 className="card-h3">CBS</h3>
          <p>Ryzen 7 7800X3D | RTX 4070 Super | 32GB RAM | 1TB SSD</p>
          <br />
          <h3 className="card-h3">$2899.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card5">
          <img src={Prebuilt5} width={180} height={180} alt="Pc5" />
          <br />
          <h3 className="card-h3">Burin</h3>
          <p>- Ryzen 7 9800X3D | RTX 4080 Super | 64GB RAM | 1TB + 2TB SSD</p>
          <h3 className="card-h3">$2999.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card6">
          <img src={Prebuilt6} width={180} height={180} alt="Pc6" />
          <br />
          <h3 className="card-h3">Springdale</h3>
          <p>AMD Ryzen 7 7700 | RTX 4070 | 32GB RAM | 1TB SSD</p>
          <br />
          <h3 className="card-h3">$3199.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card7">
          <img src={Prebuilt7} width={180} height={180} alt="Pc7" />
          <br />
          <h3 className="card-h3">Corner Brook</h3>
          <p>
            Intel Core i9-14900KF | RTX 4080 Super | 64GB RAM | 2TB + 2TB SSD
          </p>

          <h3 className="card-h3">$3399.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card8">
          <img src={Prebuilt8} width={180} height={180} alt="Pc8" />
          <br />
          <h3 className="card-h3">St. John's</h3>
          <p>Ryzen 7 7800X3D | RTX 4080 Super | 32GB RAM | 1TB + 2TB SSD</p>

          <h3 className="card-h3">$3799.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="card pc-card9">
          <img src={Prebuilt9} width={180} height={180} alt="Pc9" />
          <br />
          <h3 className="card-h3">Cape Spear</h3>
          <p>Ryzen 9 7800X3D | RTX 5090 Ti Super | 64GB RAM | 2TB + 2TB M.2</p>

          <h3 className="card-h3">$5999.99</h3>
          <button id="pc-button">Add to Cart</button>
        </div>

        <div className="about-header">
          <h1>About Us</h1>
        </div>

        <div className="about-section">
          <p>
            At Rock Tech Solutions, we've been proudly serving Newfoundland's
            technology needs since 2007. Nestled in the heart of St. John's, our
            locally-owned and operated computer store combines East Coast
            hospitality with cutting-edge tech expertise.
          </p>
          <br />
          <p>
            We understand the unique challenges of island living and have built
            our business around providing reliable technology solutions that
            keep Newfoundlanders connected, productive, and ahead of the curve.
            Whether you're a fisher needing a rugged laptop that can withstand
            harsh conditions, a remote worker requiring a stable home office
            setup, or a student looking for affordable computing options, our
            experienced team delivers personalized service with a smile.
          </p>
          <br />
          <p>
            Our store features a carefully curated selection of computers,
            parts, accessories, and software to meet every need and budget.
            Beyond retail, we offer expert repairs, custom builds, business IT
            support, and technology education for all ages. At Rock Tech
            Solutions, we're more than just a computer store.. we're your
            technology partners through fog, wind, and snow. Drop by for a chat,
            a free diagnostic, or just to talk tech. We'll put the kettle on.
          </p>
        </div>
      </main>

      <footer>
        <div className="footer-left">© 2025 NL Computers</div>

        <div className="footer-right">
          <a href="http://facebook.com">
            <img src={Facebook} width={15} height={5} alt="fontawesome" />
          </a>
          <a href="http://instagram.com">
            <img src={Instagram} width={15} height={5} alt="fontawesome" />
          </a>
          <a href="http://twitter.com">
            <img src={Twitter} width={15} height={5} alt="fontawesome" />
          </a>
          <a href="http://youtube.com">
            <img src={Youtube} width={15} height={5} alt="fontawesome" />
          </a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
