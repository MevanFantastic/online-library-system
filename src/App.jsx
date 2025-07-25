import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BrowseBooks />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
  <p>
    Project Repository: <a href="https://github.com/MevanFantastic/online-library-system.git" target="_blank">GitHub Link</a>
  </p>
  <p>Created by Mevan</p>
</footer>

    </div>
  );
}



export default App;
