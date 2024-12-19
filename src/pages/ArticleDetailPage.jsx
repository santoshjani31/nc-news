import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchArticleDetails,
  fetchArticleComments,
  patchArticleVotes,
  deleteComment,
} from '../api';
import CommentCard from '../components/CommentCard';
import CommentForm from '../components/CommentForm';

const ArticleDetailPage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteError, setVoteError] = useState(null);

  useEffect(() => {
    const getArticleData = async () => {
      try {
        // Fetch article details
        const articleData = await fetchArticleDetails(article_id);
        setArticle(articleData.articles);
        // Fetch comments separately
        const commentsData = await fetchArticleComments(article_id);
        setComments(commentsData.comments);
      } catch (err) {
        setError('Failed to load article or comments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getArticleData();
  }, [article_id]);

  const handleDeleteComment = async (comment_id) => {
    try {
      // Optimistically update the UI by removing the comment immediately
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.comment_id !== comment_id)
      );

      // Make the API request to delete the comment
      await deleteComment(comment_id);
    } catch (err) {
      setError('Failed to delete comment. Please try again later.');
      // Re-add the comment if deletion fails
      setComments((prevComments) => [...prevComments]);
    }
  };

  const handleVote = async (inc_votes) => {
    setVoteError(null); // Reset any previous error
    setArticle((prev) => ({
      ...prev,
      votes: prev.votes + inc_votes, // Optimistic update
    }));

    try {
      await patchArticleVotes(article_id, inc_votes);
    } catch (err) {
      setVoteError('Failed to update votes. Please try again.');
      // Revert optimistic update
      setArticle((prev) => ({
        ...prev,
        votes: prev.votes - inc_votes,
      }));
    }
  };

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
      <div className='vote-section'>
        <h3>Votes: {article.votes}</h3>
        <button onClick={() => handleVote(1)} className='upvote-button'>
          Upvote
        </button>
        <button onClick={() => handleVote(-1)} className='downvote-button'>
          Downvote
        </button>
        {voteError && <p className='error-message'>{voteError}</p>}
      </div>
      <section className='comments-section'>
        <h2>Comments:</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              onDelete={handleDeleteComment}
            />
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        <CommentForm article_id={article_id} />
      </section>
    </main>
  );
};

export default ArticleDetailPage;
