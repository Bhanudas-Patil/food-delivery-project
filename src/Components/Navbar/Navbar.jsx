import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="mainContainer">
      <nav>
        <div className="logo">
          <div className="foodlogo">🍔</div>
          <div className="logoName">Foodie</div>
        </div>
        <ul className="listitems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" aria-label="Cart">
              <FaCartShopping />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
