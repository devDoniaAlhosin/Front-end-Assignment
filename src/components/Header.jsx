import React from 'react';
import './Header.css';
function Header() {
    return (
        <header className="header bg-primary text-white text-center py-4 shadow-sm">
      <div className="container">
        <h1 className="display-4 mb-2">Welcome to the Posts Page</h1>
        <p className="lead">Browse through our latest posts and enjoy reading!</p>
      </div>
    </header>
    );
}

export default Header;