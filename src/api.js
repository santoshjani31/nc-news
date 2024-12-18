import axios from 'axios';

const BASE_URL = 'https://be-my-nc-news.onrender.com/api';

export const fetchArticles = () =>
  axios.get(`${BASE_URL}/articles`).then((response) => {
    return response.data;
  });

export const fetchArticleDetails = (article_id) =>
  axios.get(`${BASE_URL}/articles/${article_id}`).then((response) => {
    return response.data;
  });
