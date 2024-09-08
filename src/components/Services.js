import React from 'react';

function Services() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="row services">
        <div className="col-sm-6 col-md-3">
          <div className="icon-wrapper">
            <img src="img/service-img-1.png" alt="Service 1" />
          </div>
          <h6>Corporative identity</h6>
          <p>Quisque placerat porttitor nisi felis congue in & Tempus</p>
        </div>
        {/* Add more service items here */}
      </div>
    </div>
  );
}

export default Services;
