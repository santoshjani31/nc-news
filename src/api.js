import axios from 'axios';

const BASE_URL = 'https://be-my-nc-news.onrender.com/api';

export const fetchArticles = (sortBy = 'created_at', order = 'desc') => {
  return axios
    .get(`${BASE_URL}/articles`, {
      params: {
        sort_by: sortBy,
        order: order,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching articles:', error);
      throw new Error('Unable to fetch articles. Please try again later.');
    });
};

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
