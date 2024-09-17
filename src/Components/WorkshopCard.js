import React from 'react';
import './WorkshopCard.css'; 

function WorkshopCard({ title, price, date, image }) {
  return (
    <div className="workshop-card">
      <div className="workshop-card-image-container">
        <img src={image} alt="Workshop" /> {/* Use image prop */}
      </div>
      <div className="workshop-card-content">
        <h2>{title}</h2> {/* Use title prop */}
        <p className='workshop-details'>{price}</p> {/* Use price prop */}
        <p className='workshop-details'>{date}</p> {/* Use date prop */}
        <div className="workshop-card-buttons">
          <button className="enroll-button">Enroll</button>
          <button className="details-button">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default WorkshopCard;
