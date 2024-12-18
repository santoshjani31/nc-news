import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleDetails } from '../api';

const ArticleDetailPage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticleData = async () => {
      try {
        // Fetch article details
        const articleData = await fetchArticleDetails(article_id);
        setArticle(articleData.articles);
      } catch (err) {
        setError('Failed to load article. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getArticleData();
  }, [article_id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found.</p>;

  return (
    <main className='article-detail-page'>
      <h2>{article.title}</h2>
      <img
        src={article.article_img_url}
        alt={article.title}
        className='article-image'
      />
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Published: {new Date(article.created_at).toLocaleDateString()}</p>
      <p>{article.body}</p>
    </main>
  );
};

export default ArticleDetailPage;
