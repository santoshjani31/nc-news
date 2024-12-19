import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles } from '../api';
import ArticleCard from '../components/ArticleCard';

const TopicPage = () => {
  const { slug } = useParams(); // Get the topic slug from the URL
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles for the specific topic
    const getArticlesByTopic = async () => {
      try {
        const response = await fetchArticles(); // Fetch all articles
        const topicArticles = response.articles.filter(
          (article) => article.topic === slug // Filter by the topic slug
        );
        setArticles(topicArticles);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getArticlesByTopic();
  }, [slug]); // Fetch articles whenever the topic changes

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className='topic-page'>
      <h2>Articles on {slug.charAt(0).toUpperCase() + slug.slice(1)}:</h2>
      <div className='articles-container'>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))
        ) : (
          <p>No articles found for this topic.</p>
        )}
      </div>
    </main>
  );
};

export default TopicPage;
