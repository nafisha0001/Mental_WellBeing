// AboutUsPage.js
import React from 'react';  // Assuming you have a Footer component
// import './styles.css';
import './AboutUs.css'
// import '../Images/AboutUsHead.png'
import AboutUsHead from '../Images/AboutUsHead.png';
import teampic from '../Images/teampic.png';
function AboutUs() {
  return (
    <>
    <div className="about-us-page">

      {/* About Content */}
      {/* <section className="hero">
        <img src= {AboutUsHead} alt="About Us" className='headImg' />
        <div className="hero-text">
          <h1>About Us</h1>
          <p>Our goal is to provide resources to help people take control of their mental health and well-being.</p>
        </div>
      </section> */}
      <section className="about-content">
      <img src= {AboutUsHead} alt="About Us" className='headImg' />
        <div className="section">
          <h2>What We Do</h2>
          <p>Our goal is to provide you with the most accurate, up-to-date, and evidence-based information about mental health. We also offer tools and resources to help you manage your mental health, and connect you with professionals who can provide personalized support.</p>
        </div>
        <div className="section">
          <h2>Our Mission</h2>
          <p>We believe that everyone should have access to high-quality mental health care. Our mission is to make mental health care more accessible, affordable, and effective for everyone.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={teampic} alt="Dr. Sandra White" />
            <h3>Dr. Sandra White</h3>
            <p>Lead Therapist</p>
          </div>
          <div className="team-member">
            <img src={teampic} alt="Dr. John Doe" />
            <h3>Dr. John Doe</h3>
            <p>Psychologist</p>
          </div>
          <div className="team-member">
            <img src={teampic}  alt="Emily Johnson" />
            <h3>Emily Johnson</h3>
            <p>Therapist</p>
          </div>
          <div className="team-member">
            <img src={teampic}  alt="Robert Smith" />
            <h3>Robert Smith</h3>
            <p>Consultant</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      

      {/* <section className="contact-form">
        <h2>Contact Us</h2>
        <div className='contact-form-div'>
            <form>
                <input type="text" name="name" placeholder="Enter your Name" required />
                <input type="email" name="email" placeholder="Enter your email" required />
                <textarea name="query" placeholder="Enter your Query" required></textarea>
                <button type="submit">Send Query</button>
            </form>
        </div>
        
      </section> */}
    <section className="contact-form">
    <h2>Contact Us</h2>
    <div className="contact-form-div">
        <form>
            <input type="text" name="name" placeholder="Enter your Name" required />
            <input type="email" name="email" placeholder="Enter your email" required />
            <textarea name="query" placeholder="Enter your Query" required></textarea>
            <button type="submit">Send Query</button>
        </form>
    </div>
</section>


      
    </div>
    </>
  );
}

export default AboutUs;
