
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './VideosPage.css'; // Add appropriate styling

const videosData = [
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Understanding Deep Learning',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'React Tutorial for Beginners',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'How to Cook Healthy Meals',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Understanding Deep Learning',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'React Tutorial for Beginners',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'How to Cook Healthy Meals',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Understanding Deep Learning',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'React Tutorial for Beginners',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'How to Cook Healthy Meals',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'Mindfulness Meditation',
    videoLink: 'https://www.youtube.com/YRJ6xoiRcpQ',
    thumbnail: 'https://img.youtube.com/vi/YRJ6xoiRcpQ/0.jpg',
  },
  {
    title: 'Understanding Deep Learning',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'React Tutorial for Beginners',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  {
    title: 'How to Cook Healthy Meals',
    videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
];

const VideosPage = () => {
  const [visibleRows, setVisibleRows] = useState(4);

  const showMoreVideos = () => {
    setVisibleRows((prevRows) => prevRows + 4); // Show 4 more rows when clicked
  };

  const visibleVideos = videosData.slice(0, visibleRows * 4); // Calculate visible videos based on rows

  return (
    <div className="videos-page">
      {/* Navigation buttons */}
      <div className="navigation">
        <button className="nav-button">Books</button>
        <button className="nav-button">Articles</button>
        <button className="nav-button">Videos</button>
      </div>

      <div className="videos-grid">
        {visibleVideos.map((video, index) => (
          <div key={index} className="video-item">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="hover-options">
              <Link to={`/video/${index}`} className="view-link">
                View the Video
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      {visibleRows * 4 < videosData.length && (
        <div className="more-button">
          <button onClick={showMoreVideos}>More...</button>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
