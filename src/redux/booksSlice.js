import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream and the roaring twenties.',
    category: 'Fiction',
    rating: 4.2,
    image: '/assets/The Great Gatsby.png'
  },
  {
    id: 2,
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    description: 'Explores the history and impact of Homo sapiens.',
    category: 'Non-Fiction',
    rating: 4.5,
    image: '/assets/Sapiens.png'
  },
  {
    id: 3,
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'Set in a distant future amidst a huge interstellar empire.',
    category: 'Sci-Fi',
    rating: 4.6,
    image: '/assets/Dune.png'
  },
  {
    id: 4,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A thrilling mystery about a woman’s act of violence against her husband.',
    category: 'Mystery',
    rating: 4.1,
    image: '/assets/The Silent Patient.png'
  },
  {
    id: 5,
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about growing up in a strict and abusive household in rural Idaho.',
    category: 'Non-Fiction',
    rating: 4.7,
    image: '/assets/Educated.png'
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  addBook: (state, action) => {
  state.push(action.payload);
    }
  }
});

export const { addBook }= booksSlice.actions;
export default booksSlice.reducer;
