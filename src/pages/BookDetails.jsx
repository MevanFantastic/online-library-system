import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id }=useParams();
  const books=useSelector((state)=>state.books);
  const book=books.find((b)=>b.id === parseInt(id, 10));

  if(!book) {
    return(
      <div className="container">
      <h2>Book not found</h2>
      <Link to="/books">Back to Browse</Link>
    </div>
    );
  }

  return (
  <div className="container book-detail">
    <img src={book.image} alt={book.title} />
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/books">Back to Browseing</Link>
    </div>
    </div>
  );
}

export default BookDetails;


