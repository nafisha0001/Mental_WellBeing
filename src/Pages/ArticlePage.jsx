// src/pages/ArticlePage.js
import React from 'react';
import { articlesData } from '../Data/articlesData';
import ArticlePreview from '../Components/ArticlePreview';
import './ArticlePage.css'; // Create CSS for zig-zag pattern

const ArticlePage = () => {
  return (
    <div className="articles-page">
      {articlesData.map((article, index) => (
        <ArticlePreview
          key={article.id}
          article={article}
          isZigZag={index % 2 === 1} // Alternate for zigzag layout
        />
      ))}
    </div>
  );
};

export default ArticlePage;
