import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BrowseBooks() {
  const{ category }=useParams();
  const books=useSelector((state)=>state.books);
  const [searchTerm, setSearchTerm]= useState('');

let categoryName = '';
  if (category) {
  if (category.toLowerCase() === 'sci-fi') categoryName ='Sci-Fi';
  else if (category.toLowerCase() === 'nonfiction') categoryName ='Non-Fiction';
  else categoryName = category.charAt(0).toUpperCase()+ category.slice(1);
  }

 let filteredBooks = books;
  if(category) {
    filteredBooks = books.filter(
      (b)=> b.category.toLowerCase() === categoryName.toLowerCase()
    );
  }
  if (searchTerm) {
  filteredBooks = filteredBooks.filter((b)=>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="container">
    <h1>Browse Books {categoryName && `- ${categoryName}`}</h1>
    <div className="search-bar">
        <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul className="book-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
          <img src={book.image} alt={book.title} className="book-img" />
          <div>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
          </div>
          </li>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </ul>
      </div>
  );
}

export default BrowseBooks;


