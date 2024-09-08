import React from 'react';

const Navbar = ({ isMenuOpen }) => {
  return (
    <>
    <ul className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
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
    
    </>
  );
};

export default Navbar;
