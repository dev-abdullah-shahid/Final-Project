import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here (e.g., redirect or filter)
    console.log('Searching for:', searchQuery);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <div className="logo-icon">DIY</div>
          <span className="logo-text">CHATROOM</span>
        </Link>
      </div>
      
      <nav className={`nav-center ${isMenuOpen ? 'nav-open' : ''}`}>
        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Search Community"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <span>🔍</span>
          </button>
        </form>
        
        <Link to="/gallery" className="nav-btn">
          <span className="icon-gallery">🖼️</span>
          <span>Gallery</span>
        </Link>
        
        <Link to="/community" className="nav-btn">
          <span className="icon-community">👥</span>
          <span>Community</span>
        </Link>
        
        <Link to="/resources" className="nav-btn">
          <span className="icon-resources">📚</span>
          <span>Resources</span>
        </Link>
      </nav>
      
      <div className="nav-right">
        <button 
          className="more-btn" 
          onClick={toggleMenu}
          aria-label="More options"
        >
          ⋯
        </button>
        <button 
          className="signup-btn"
          onClick={() => window.location.href = '/signup'} // Redirect to signup page
        >
          <span className="icon-user">👤</span>
          Signup
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu">
            <Link to="/gallery" onClick={toggleMenu}>
              <span>🖼️</span> Gallery
            </Link>
            <Link to="/community" onClick={toggleMenu}>
              <span>👥</span> Community
            </Link>
            <Link to="/resources" onClick={toggleMenu}>
              <span>📚</span> Resources
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;