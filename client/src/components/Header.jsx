import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <h2>DIY Craft App</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/community">Community</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </header>
  );
};

export default Header;