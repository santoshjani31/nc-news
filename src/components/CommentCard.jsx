import React from 'react';

const CommentCard = ({ comment }) => {
  const { author, body, created_at, votes } = comment;

  return (
    <div className='comment-card'>
      <p>
        <strong>{author}</strong> commented:
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Posted: {new Date(created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default CommentCard;
