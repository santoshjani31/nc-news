import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleCard from '../components/ArticleCard';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  if (loading) return <p>Loading articles ...</p>;
  if (error) return <p>{error}</p>;
  return (
    <main className='articles-page'>
      <div className='filter-sort-container'>
        <button className='filter-button'>Filter</button>
        <button className='sort-button'>Sort</button>
      </div>
      <div className='articles-container'>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default ArticleListPage;
