import { configureStore } from '@reduxjs/toolkit';
import catagoriesReducer from './catagories/catagories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    cat: catagoriesReducer,
    books: booksReducer,
  },
});
export default store;
