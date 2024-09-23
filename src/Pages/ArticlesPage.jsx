import React, { useState } from 'react';
import './ArticlesPage.css'; // Add appropriate styling for the page
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import articlesData from './articlesData';

const ArticlesPage = () => {
  const [currentArticle, setCurrentArticle] = useState(0); // Track the current article

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articlesData.length); // Go to the next article
  };

  const previousArticle = () => {
    setCurrentArticle((prev) =>
      prev === 0 ? articlesData.length - 1 : prev - 1
    ); // Go to the previous article
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Handle feedback submission logic here (API or state management)
    console.log('Feedback submitted');
  };

  return (
    <div className="articles-page">
      {/* Article Navigation */}
      <div className="article-navigation">
        <FaArrowLeft className="nav-arrow left" onClick={previousArticle} />
        <FaArrowRight className="nav-arrow right" onClick={nextArticle} />
      </div>

      {/* Article Content */}
      <div className="article-content">
        <h2>{articlesData[currentArticle].title}</h2>
        <p>{articlesData[currentArticle].content}</p>
      </div>

      {/* Feedback Box */}
      <div className="feedback-section">
        <h3>Your Feedback</h3>
        <form onSubmit={handleFeedbackSubmit}>
          <textarea
            placeholder="Share your feedback here..."
            className="feedback-input"
          ></textarea>
          <button type="submit" className="feedback-submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticlesPage;
