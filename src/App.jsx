import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ArticleListPage from './pages/ArticleListPage';
import ArticleDetailPage from './pages/ArticleDetailPage'; // Import ArticleDetailPage
import TopicPage from './pages/TopicPage';
import PostArticlePage from './pages/PostArticlePage';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<ArticleListPage />} />
          <Route path='/articles/:article_id' element={<ArticleDetailPage />} />
          <Route path='/topics/:slug' element={<TopicPage />} />
          <Route path='/post-article' element={<PostArticlePage />} />
          <Route path='/profile' element={<UserProfilePage />} />
        </Routes>
        <footer className='footer'>© 2024 nc-news.com</footer>
      </div>
    </Router>
  );
}

export default App;
