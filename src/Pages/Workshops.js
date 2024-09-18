import React from 'react';
import WorkshopCard from '../Components/WorkshopCard';
import personBack from '../Images/workshops/personBack.avif';
import personEating from '../Images/workshops/pesonEating.jpg';
import artTherapy from '../Images/workshops/art therapy.jpg';
import angerManagement from '../Images/workshops/Anger management.jpeg';
import digitalDetox from '../Images/workshops/digital detox';
import nutritionAndMentalHealth from '../Images/workshops/Nutrition and mental health.png';
import './Workshop.css';

function Workshops() {
  const workshopDetails = [
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "Mindful Eating", price: "Rs. 300", date: "Wednesday, Mar 29, 4:00 PM", image: personEating},
    { title: "Art Therapy", price: "Rs. 400", date: "Tuesday, Oct 22, 5:00 PM", image: artTherapy },
    { title: "Anger Management", price: "Rs. 800", date: "sunday, Mar 22, 2:00 PM", image: angerManagement },
    { title: "Digital Detox", price: "Rs. 700", date: "Monday, April 02, 5:00 PM", image: digitalDetox },
    { title: "Nutrition & Mental Health", price: "Rs. 1000", date: "Saturday, June 14, 7:00 PM", image: nutritionAndMentalHealth },
    { title: "The Art of Letting Go", price: "Rs. 500", date: "Tuesday, Mar 22, 5:00 PM", image: personBack },
    { title: "Mindful Eating", price: "Rs. 300", date: "Wednesday, Mar 29, 4:00 PM", image: personEating},
    { title: "Art Therapy", price: "Rs. 400", date: "Tuesday, Oct 22, 5:00 PM", image: artTherapy }
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
