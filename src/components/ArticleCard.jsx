import React from 'react';

const ArticleCard = ({ article }) => {
  const { title, topic, author, created_at, votes, article_img_url } = article;
  return (
    <div className='article-card'>
      <img src={article_img_url} alt={title} className='article-image' />
      <div className='article-details'>
        <h2>{title}</h2>
        <p>Topic: {topic}</p>
        <p>Author: {author}</p>
        <p>Votes: {votes}</p>
        <p>Published: {new Date(created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
