import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container small-sm">
        <div className="row">
          <div className="col-md-3">
            <a href="/"><img src="img/logo.png" alt="Logo" /></a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-2">
            <h6>Contact Us</h6>
            <ul>
              <li><a href="tel:+123456789">+12 345 6789</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          {/* Add more footer sections here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
