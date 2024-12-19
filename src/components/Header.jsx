import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const userAvatarURL =
    'https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002';

  // State to manage dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Topics list for the dropdown
  const topics = ['coding', 'cooking', 'football'];

  return (
    <header className='header'>
      <div className='header-content'>
        <h1 className='header-title'>NC-NEWS</h1>
        <img
          src={userAvatarURL}
          alt='cooljmessy Avatar'
          className='profile-image'
        />
      </div>
      <nav className='nav-bar'>
        <Link to='/'>Home</Link> |{/* Topics dropdown */}
        <div
          className='topics-dropdown'
          onMouseEnter={() => setDropdownVisible(true)} // Show the dropdown when hovering over Topics
          onMouseLeave={() => setDropdownVisible(false)} // Hide the dropdown when mouse leaves
        >
          <span>Topics</span>
          {isDropdownVisible && (
            <div className='dropdown-menu'>
              {topics.map((topic) => (
                <Link key={topic} to={`/topics/${topic}`}>
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}{' '}
                  {/* Capitalize first letter */}
                </Link>
              ))}
            </div>
          )}
        </div>
        | <Link to='/post-article'>Post Article</Link> |
        <Link to='/profile'>Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
