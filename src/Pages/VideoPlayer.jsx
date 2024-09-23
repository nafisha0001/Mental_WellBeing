
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayer.css'

// Sample video data
const videosData = [
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/embed/YRJ6xoiRcpQ',
    description: 'Learn how to practice mindfulness meditation and discover the benefits of staying present in the moment. This video guides you through simple techniques to improve your focus and mental well-being.',
  },
  {
    title: 'Understanding Deep Learning',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Deep learning is a subset of machine learning. This video provides an introduction to deep learning techniques and explains the basics of neural networks.',
  },
  {
    title: 'React Tutorial for Beginners',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'This tutorial covers the fundamentals of React.js, a popular JavaScript library for building user interfaces. Great for beginners starting with React development.',
  },
  {
    title: 'How to Cook Healthy Meals',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Cooking healthy meals doesn’t have to be difficult! Learn simple recipes and techniques for preparing nutritious meals that are easy to cook.',
  },
];

const VideoPlayer = () => {
  const { id } = useParams(); // Get the video ID from the URL
  const video = videosData[id]; // Find the video based on the ID

  // Feedback state
  const [feedback, setFeedback] = useState('');

  // Handle feedback submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    setFeedback(''); // Clear the feedback box after submission
  };

  return (
    <div className="page-container">
      <h2>{video.title}</h2>

      <div className="video-and-description">
        {/* Video Player */}
        <div className="video-container">
          <iframe
            src={video.videoLink}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <p>{video.description}</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="feedback-form">
        <form onSubmit={handleFeedbackSubmit}>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            required
          ></textarea>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default VideoPlayer;
