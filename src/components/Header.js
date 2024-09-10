import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to change header padding and add 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-style-2 ${
        isScrolled ? "scrolled bg-white" : "bg-white"
      }`}
    >
      <div className="wide-container-fluid">
        <div className="row">
          <div className="col-xs-2">
            <a className="logo" href="index.html">
              <img src="img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="col-xs-10 text-right">
            <ul className="header-menu open">
              <li className="active">
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/events">
                  <span>Event & Exhibition</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span>Buy a Ticket</span>
                </a>
              </li>

              <li>
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <a href="shop.html">
                  <span>Collection</span>
                </a>
                <ul>
                  <li>
                    <a href="#">Products #1</a>
                  </li>
                  <li>
                    <a href="#">Products #2</a>
                  </li>
                  <li>
                    <a href="#">Products #3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="checkout.html">
                  <span>Checkout</span>
                </a>
              </li>
              <li>
                <a href="contact.html">
                  <span>Contact us</span>
                </a>
              </li>
              <li>
                <Link to="/login">Log in &#47; Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
