import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';

  function AddBook() {
  const dispatch = useDispatch();
   const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Fiction');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');


  // cat
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'History'];

  const handleSubmit = (e) => {
e.preventDefault();
    if (!title || !author || !description || !category || !rating) {
      setError('All fields are required.');
      return;
       }
    const newBook = {
      id: Date.now(),
      title,
      author,
      description,
      category,
      rating :  parseFloat(rating )
    } ;
    dispatch(addBook(newBook));
    navigate('/books');
  };

      return (
     <div className="container">
      <h1>Add a New Book</h1>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <label>Author:</label>
        <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Description:</label>
        <textarea
        value={description}
      onChange={(e) => setDescription(e.target.value)}
        />
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={rating}
          onChange={(e) => setRating(e.target.value)} //fix 
        />
        <button type="submit">Add Book</button>
        {error && <p className="error">{error}</p>}
      </form>
  </div>
  );
}

export default AddBook;
