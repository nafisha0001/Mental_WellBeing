import React from 'react';
import WorkshopCard from '../Components/WorkshopCard';
import personBack from '../Images/workshops/personBack.avif';
import './Workshop.css';

function Workshops() {
  const workshopDetails = [
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
  ];

  return (
    <div className="workshop-grid-container">
      {workshopDetails.map((workshop, index) => (
        <WorkshopCard
          key={index}
          title={workshop.title}
          price={workshop.price}
          date={workshop.date}
          image={workshop.image}
        />
      ))}
    </div>
  );
}

export default Workshops;
