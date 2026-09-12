import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import { useState } from "react";
import CartSidebar from "../CartSidebar/CartSidebar";
function Navbar({ cart, setCart }) {

  let [show, setShow] = useState(false);

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
            <Link to="" onClick={() => { setShow(!show) }}>
              <FaCartShopping />
              <span>{cart.length}</span>
            </Link>
          </li>
        </ul>
        {
          show && <CartSidebar show={show} setShow={setShow} cart={cart} setCart={setCart} ></CartSidebar>
        }
      </nav>
    </div>
  );
}

export default Navbar;
