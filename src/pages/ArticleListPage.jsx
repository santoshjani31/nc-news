import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  // Extract sorting options from the URL or set defaults
  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'desc';

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchArticles(sortBy, order);
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [sortBy, order]);

  // Handle sorting option change
  const handleSortByChange = (event) => {
    const newSortBy = event.target.value;
    setSearchParams({ sort_by: newSortBy, order }); // Update URL params
  };

  // Handle order change
  const handleOrderChange = () => {
    const newOrder = order === 'desc' ? 'asc' : 'desc';
    setSearchParams({ sort_by: sortBy, order: newOrder }); // Update URL params
  };

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className='articles-page'>
      <div className='filter-sort-container'>
        <div className='sort-controls'>
          <label htmlFor='sort-by'>Sort by:</label>
          <select id='sort-by' value={sortBy} onChange={handleSortByChange}>
            <option value='created_at'>Date</option>
            <option value='comment_count'>Comment Count</option>
            <option value='votes'>Votes</option>
          </select>

          <button onClick={handleOrderChange} className='order-toggle-button'>
            {order === 'desc' ? 'Descending' : 'Ascending'}
          </button>
        </div>
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
