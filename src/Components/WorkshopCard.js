import React, { useState } from 'react';
import './WorkshopCard.css';

function WorkshopCard({ title, price, date, image }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Handle email input and validate it
  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  const handleDialogEnrollClick = () => {
    if (isEmailValid && email) {
      setIsDialogOpen(false); 
      setIsSuccessDialogOpen(true); 
    } else {
      alert('Please enter a valid email.');
    }
  };

  const handleWorkshopDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleWorkshopDialogClose = () => {
    setIsDialogOpen(false);
    setIsSuccessDialogOpen(false);
    setEmail(''); // Reset email on dialog close
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

      {/* Enrollment Dialog */}
      {isDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>{title}</h3> 
            <p>Date: {date}</p> 

            <input
              type="email"
              placeholder="Enter your email"
              className={`email-input ${!isEmailValid ? 'invalid-input' : ''}`}
              value={email}
              onChange={handleEmailChange}
              required
            />
            <div className="workshop-dialog-buttons">
              <button className="dialog-cancel-button" onClick={handleWorkshopDialogClose}>Cancel</button>
              <button className="dialog-enroll-button" onClick={handleDialogEnrollClick} disabled={!email || !isEmailValid}>Enroll</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Dialog */}
      {isSuccessDialogOpen && (
        <div className="workshop-dialog-overlay">
          <div className="workshop-dialog-content">
            <h3>Successfully Enrolled</h3>
            <button className="dialog-ok-button" onClick={handleWorkshopDialogClose}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkshopCard;
