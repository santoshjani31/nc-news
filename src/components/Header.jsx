import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const userAvatarURL =
    'https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/250?cb=20170730171002';

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
        <Link to='/'>Home</Link> | <Link to='/topics'>Topics</Link> |
        <Link to='/post-article'>Post Article</Link> |
        <Link to='/profile'>Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
