import { configureStore } from '@reduxjs/toolkit';
import catagoriesReducer from './catagories/catagories';
import booksReducer from './books/books';

// importing redux required toolkit and deferent reducers

// Combine both reducers into a root reducer by using configureStore function.

const store = configureStore({
  reducer: {
    cat: catagoriesReducer,
    books: booksReducer,
  },
});
export default store;
