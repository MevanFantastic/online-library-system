import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/books">Browse Books</Link>
      <Link to="/add-book">Add Books</Link>
      </nav>
  );
}

 export default NavBar;
