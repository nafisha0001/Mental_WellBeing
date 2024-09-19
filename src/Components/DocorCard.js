// import React from 'react';
// import './DoctorCard.css';

// function DoctorCard({ name, fees, rating, image }) {
//     const stars = Array.from({ length: rating }, (_, index) => (
//         <span key={index} className="star">&#9733;</span> 
//     ));

//   return (
//     <div className="doctor-card">
//       <div className="doctor-card-image-container">
//       <img src={image} alt="doctor-img" />
//       </div>
//       <div className="doctor-card-content">
//         <h2>{name}</h2> 
//         <p className='doctor-fee'>{fees}</p> 
//         <div className="doctor-rating-buttons">
//           <div className="doctor-rating">{stars}</div>
//           <button className="doctor-session">Book Session</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DoctorCard;


import React, { useState } from 'react';
import './DoctorCard.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

function DoctorCard({ name, fees, rating, image }) {
    const [open, setOpen] = useState(false); 

    const stars = Array.from({ length: rating }, (_, index) => (
        <span key={index} className="star">&#9733;</span> 
    ));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="doctor-card">
            <div className="doctor-card-image-container">
                <img src={image} alt="doctor-img" />
            </div>
            <div className="doctor-card-content">
                <h2>{name}</h2>
                <p className='doctor-fee'>{fees}</p>
                <div className="doctor-rating-buttons">
                    <div className="doctor-rating">{stars}</div>
                    <button className="doctor-session" onClick={handleClickOpen}>Book Session</button>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book a Session</DialogTitle>
                <DialogContent>
                    {/* Content like a form or details about the session can go here */}
                    <p>Book a session with {name}.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DoctorCard;
