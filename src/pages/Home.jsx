import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const books = useSelector((state)=>state.books);
  const categories = [
    { name: 'Fiction', path: 'fiction' },
    { name: 'Non-Fiction', path: 'nonfiction' },
    { name: 'Sci-Fi', path: 'sci-fi' },
    { name: 'Mystery', path: 'mystery' },
    { name: 'History', path: 'history' }
  ];

  const popularBooks = [...books]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

  return (
    <div className="container">
      <h1>Welcome to the Online Library System</h1>
      <h2>Book Categories</h2>
      <ul className="categories">
    {categories.map((cat)=> (
    <li key={cat.path}>
    <Link to={`/books/${cat.path}`}>{cat.name}</Link>
    </li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <ul className="book-list">
        {popularBooks.map((book) => (
        <li key={book.id} className="book-item">
          <img src={book.image} alt={book.title} className="book-img" />
        <div>
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
        </li>
        ))}
      </ul>
      </div>
  );
}

export default Home;


