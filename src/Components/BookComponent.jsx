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

export default BookComponent;export const booksData = [
  {
    title: 'Harmony of Mind',
    author: 'Thinh Relax',
    image: '../Images/Yoga.jpg',
  },
  {
    title: 'How to Relax Your Mind',
    author: 'Jim Brown & Sharon Ralph',
    image: 'link_to_image2',
  },
  // Add more book objects here based on your data
];

