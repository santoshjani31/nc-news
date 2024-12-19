import React from 'react';

const CommentCard = ({ comment, onDelete }) => {
  const { author, body, created_at, votes, comment_id } = comment;
  const loggedInUser = 'cooljmessy'; // hardcode user

  const handleDelete = () => {
    onDelete(comment_id);
  };

  return (
    <div className='comment-card'>
      <p>
        <strong>{author}</strong> commented:
      </p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Posted: {new Date(created_at).toLocaleDateString()}</p>
      {author === loggedInUser && (
        <button onClick={handleDelete} className='delete-button'>
          Delete
        </button>
      )}
    </div>
  );
};

export default CommentCard;
