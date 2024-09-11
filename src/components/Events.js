import React from 'react';
import './Events.css'; // Import your CSS file

const Events = () => {
  return (
      <div className="gallery-container mt-5">
        <br/>
        <br/>
      <h1 className="mt-5">Galleries</h1>
      <div className="row">
        <div className="column">
          <img src="path_to_image1" alt="Indian Sculptures" className="gallery-image" />
          <p>Indian Sculptures</p>
        </div>
        <div className="column">
          <img src="path_to_image2" alt="Ancient Sculptures" className="gallery-image" />
          <p>Ancient Sculptures</p>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src="path_to_image3" alt="Jain Art" className="gallery-image" />
          <p>Jain Art</p>
        </div>
        <div className="column">
          <img src="path_to_image3" alt="Jain Art" className="gallery-image" />
          <p>Jain Art</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
