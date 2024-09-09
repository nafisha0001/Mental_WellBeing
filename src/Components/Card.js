import React from 'react';
import './Card.css'; 

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="card">
            <div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <img src={imageUrl} alt={title} className="card-image" />
        </div>
    );
};

export default Card;
