import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ArticleListPage from './pages/ArticleListPage';
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
          <Route path='/topics' element={<TopicPage />} />
          <Route path='/post-article' element={<PostArticlePage />} />
          <Route path='/profile' element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
