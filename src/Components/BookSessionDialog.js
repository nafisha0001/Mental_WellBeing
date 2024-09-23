import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import './BookSessionDialog.css';

function BookSessionDialog({ open, handleClose, name, availableSlots }) {
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };

  return (
    <Dialog id='doctor-session-slot' open={open} onClose={handleClose}>
      <DialogTitle>Book a Session</DialogTitle>
      <DialogContent>
        <p>Book a session with {name}.</p>
        <FormControl component="fieldset">
          <RadioGroup
            value={selectedSlot}
            onChange={handleSlotChange}
          >
            {availableSlots.map((slot, index) => (
              <FormControlLabel
                key={index}
                value={slot}
                control={<Radio />}
                label={slot}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions className='session-diolog-buttons'>
        <Button className='session-dialog-cancel' onClick={handleClose}>Cancel</Button>
        <Button className='session-dialog-confirm'
          onClick={() => {
            console.log(`Session booked with ${name} at ${selectedSlot}`);
            handleClose();
          }}
          disabled={!selectedSlot} 
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>

    
  );
}

export default BookSessionDialog;
