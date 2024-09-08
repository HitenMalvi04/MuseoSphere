import React, { useState } from 'react';
import './OverlayMenu.css'; // Ensure the CSS is properly imported

const OverlayMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`overlay-wrapper ${isActive ? 'active' : ''}`}>
      <div className="overlay-animation"></div>
      <div className="flex">
        <div className="flex-in">
          <div className="overlay-menu">
            <div className="container">
              <div className="row">
                <div className="btn-close" onClick={toggleMenu}>
                  <span></span>
                  <span></span>
                </div>
                <div className="col-md-2 col-md-offset-5">
                  {/* Login Section */}
                  <div className="login-wrapper">
                    <div className="login open-popup" data-rel="2">
                      Log in / Sign up
                    </div>
                  </div>
                  {/* Basket Section */}
                  <div className="basket open-popup" data-rel="1">
                    <div className="img-wrapper">
                      <img src="img/shop/basket-2.png" alt="Basket" />
                      <span>1</span>
                    </div>
                    <br />
                    <p>
                      total: <span>$149.95</span>
                    </p>
                  </div>

                  {/* Navigation Menu */}
                  <ul>
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li className="dropdown-plus">
                      <a href="portfolio.html">
                        <span>Portfolio</span>
                      </a>
                      <span></span>
                      <ul>
                        <li>
                          <a href="portfolio.html">Portfolio #1</a>
                        </li>
                        <li>
                          <a href="portfolio_wide.html">Portfolio #2</a>
                        </li>
                        <li>
                          <a href="detail.html">Portfolio detail</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                      <span></span>
                      <ul>
                        <li>
                          <a href="post.html">Blog post</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-plus">
                      <a href="shop.html">Products</a>
                      <span></span>
                      <ul>
                        <li>
                          <a href="shop.html">Products #1</a>
                        </li>
                        <li>
                          <a href="shop2.html">Products #2</a>
                        </li>
                        <li>
                          <a href="shop3.html">Products #3</a>
                        </li>
                        <li>
                          <a href="shopdetail.html">Detail products</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
