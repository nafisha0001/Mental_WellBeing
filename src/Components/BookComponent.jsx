// BookComponent.js
import React from 'react';
import './BookComponent.css'; // Import styles

const BookComponent = ({ image, title, author }) => {
  return (
    <div className="book">
      <img src={image} alt={title} className="book-image" />
      <h4 className="book-title">{title}</h4>
      <p className="book-author">{author}</p>
    </div>
  );
};

export default BookComponent;
