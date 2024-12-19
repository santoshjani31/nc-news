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

export const fetchArticleComments = (article_id) =>
  axios.get(`${BASE_URL}/articles/${article_id}/comments`).then((response) => {
    return response.data;
  });

export const patchArticleVotes = (article_id, inc_votes) =>
  axios
    .patch(`${BASE_URL}/articles/${article_id}`, { inc_votes })
    .then((response) => response.data);

export const postComment = (article_id, body) =>
  axios.post(`${BASE_URL}/articles/${article_id}/comments`, {
    username: 'cooljmessy',
    body,
  });

export const deleteComment = (comment_id) =>
  axios
    .delete(`${BASE_URL}/comments/${comment_id}`)
    .then((response) => response.data);
