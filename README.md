# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion platform. This project demonstrates a full-stack CRUD application, where users can view, post, vote on, and comment on articles divided into various topics. The app is built using React for the front end and Node.js for the back end.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Core Functionality](#core-functionality)
- [Deployment](#deployment)
- [Planned Enhancements](#planned-enhancements)

## About the Project

This project was developed as part of the Northcoders Bootcamp to consolidate understanding of full-stack development, focusing on the implementation of a React front end and the integration of a Node.js back end.

## Features

- View a list of all articles and filter them by topic.
- Sort articles by date, votes, or comment count.
- Read individual articles and view associated comments.
- Upvote or downvote articles.
- Post new comments on articles.
- Delete comments made by the logged-in user.
- Handle errors for non-existent paths, articles, and topics.
- Responsive design for different screen sizes.

## Technologies Used

### Front End

- React
- React Router
- Axios
- CSS (for basic styling)

### Back End

- Node.js
- Express.js
- PostgreSQL (database)
- CORS

### Deployment

- Front End: Netlify
- Back End: Render, Supabase

## Setup Instructions

### Prerequisites

- Node.js installed on your machine
- A code editor (e.g., VS Code)
- Git installed on your machine

### Front End Setup

1. Clone the front end repository:
   ```bash
   git clone https://github.com/santoshjani31/nc-news.git
   cd nc-news
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Back End Setup

1. Clone the back end repository:
   ```bash
   git clone https://github.com/santoshjani31/be-my-nc-news.git
   cd be-my-nc-news
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Enable CORS in `app.js`:
   ```javascript
   const cors = require('cors');
   app.use(cors());
   ```
4. Start the server:
   ```bash
   npm run start
   ```

### Connecting Front End and Back End

Update the base URL for API calls in your React app to point to the deployed back end or local server (e.g., `http://localhost:5000` or your Render URL).

## API Endpoints

### Articles

- `GET /api/articles`: Fetch all articles.
- `GET /api/articles/:article_id`: Fetch a specific article.
- `PATCH /api/articles/:article_id`: Vote on an article.

### Comments

- `GET /api/articles/:article_id/comments`: Fetch comments for an article.
- `POST /api/articles/:article_id/comments`: Add a comment to an article.
- `DELETE /api/comments/:comment_id`: Delete a specific comment.

### Topics

- `GET /api/topics`: Fetch all topics.

## Core Functionality

1. **View Articles:**

   - Articles are displayed in a list with basic information like title, topic, author, and votes.
   - Users can click an article to view more details.

2. **Vote on Articles:**

   - Increment or decrement the vote count directly from the article or list view.
   - Updates are optimistically rendered for a seamless user experience.

3. **Post and Delete Comments:**

   - Users can add comments to articles.
   - Only the logged-in user can delete their own comments.

4. **Sort and Filter Articles:**

   - Articles can be sorted by date, votes, or comment count.
   - Users can filter articles by topic.

5. **Error Handling:**
   - Users are shown clear error messages for invalid paths, missing resources, or failed actions (e.g., posting a comment without required fields).

## Deployment

### Front End

The front end of the app is hosted on Netlify. You can access the live app [here](https://dev-nc-news.netlify.app/).

### Back End

The back end API is hosted on Render. Check the documentation [here](#).

## Planned Enhancements

- Implement user authentication and authorization.
- Improve styling and add a dark mode toggle.
- Add pagination for articles and comments.
- Enhance error messages with more details and actionable steps.

---

We hope you enjoy using Northcoders News! If you encounter any issues or have feedback, feel free to reach out via GitHub or email.
