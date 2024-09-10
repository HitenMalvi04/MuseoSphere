import React, { useEffect, useState } from 'react';
import '../App.css';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-style-2 ${isScrolled ? 'scrolled bg-white' : 'bg-white'}`}>
      <div className="wide-container-fluid">
        <div className="row">
          <div className="col-xs-2">
            <a className="logo" href="index.html">
              <img src="img/logo.png" alt="logo" />
            </a>
          </div>
          <div className="col-xs-10 text-right">
            <ul className="header-menu open">
              <li className="active"><a href="index.html"><span>Home</span></a></li>
              <li><a href="about.html"><span>About us</span></a></li>
              <li><a href="service.html"><span>Services</span></a></li>
              <li>
                <a href="portfolio.html"><span>Portfolio</span></a>
                <ul>
                  <li><a href="portfolio.html">Portfolio #1</a></li>
                  <li><a href="portfolio_wide.html">Portfolio #2</a></li>
                  <li><a href="detail.html">Portfolio detail</a></li>
                </ul>
              </li>
              <li className="dropdown-plus">
                <a href="blog.html"><span>Blog</span></a>
                <ul>
                  <li><a href="post.html">Blog post</a></li>
                </ul>
              </li>
              <li>
                <a href="shop.html"><span>Products</span></a>
                <ul>
                  <li><a href="shop.html">Products #1</a></li>
                  <li><a href="shop2.html">Products #2</a></li>
                  <li><a href="shop3.html">Products #3</a></li>
                  <li><a href="shopdetail.html">Detail products</a></li>
                </ul>
              </li>
              <li><a href="checkout.html"><span>Checkout</span></a></li>
              <li><a href="contact.html"><span>Contact us</span></a></li>
            </ul>

            {/* Basket */}
            <div className="basket open-popup" data-rel="1">
              <div className="img-wrapper">
                <span>1</span> {/* Basket count */}
              </div>
              <p>total: <span>149.95&#36;</span></p>
            </div>

            {/* Login */}
            <div className="login-wrapper">
              <div className="login open-popup" data-rel="2">
                <span>Log in &#47; Sign up</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
