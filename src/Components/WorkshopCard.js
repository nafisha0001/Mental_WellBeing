import React, { useState } from 'react';
import './WorkshopCard.css';

function WorkshopCard({ title, price, date, image }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleDialogEnrollClick = () => {
    setIsDialogOpen(false); 
    setIsSuccessDialogOpen(true); 
  };

  // Function to handle opening and closing of the dialog
  const handleWorkshopDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleWorkshopDialogClose = () => {
    setIsDialogOpen(false);
    setIsSuccessDialogOpen(false);
  };

  return (
    <>
      <div className="workshop-card">
        <div className="workshop-card-image-container">
          <img src={image} alt="Workshop" />
        </div>
        <div className="workshop-card-content">
          <h2>{title}</h2>
          <p className='workshop-details'>{price}</p>
          <p className='workshop-details'>{date}</p>
          <div className="workshop-card-buttons">
            <button className="workshop-enroll-button" onClick={handleWorkshopDialogOpen}>Enroll</button>
            <button className="workshop-details-button">View Details</button>
          </div>
        </div>
      </div>

      {/* Dialog Component */}
      {isDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>{title}</h3> 
            <p>Date: {date}</p> 

            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />

            {/* Buttons */}
            <div className="workshop-dialog-buttons">
              <button className="dialog-cancel-button" onClick={handleWorkshopDialogClose}>Cancel</button>
              <button className="dialog-enroll-button" onClick={handleDialogEnrollClick}>Enroll</button>
            </div>
          </div>
        </div>


      )}

      {/* Success Dialog */}
      {isSuccessDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>Successfully Enrolled</h3>
            <button onClick={handleWorkshopDialogClose}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkshopCard;
