import { configureStore } from '@reduxjs/toolkit';
import catagoriesReducer from './catagories/catagories';
import booksReducer from './books/books';
import postsSlice from './books/posts/postsSlice';
// importing redux required toolkit and deferent reducers

// configure different  reducers into a root reducer by using configureStore function.
const store = configureStore({
  reducer: {
    cat: catagoriesReducer,
    books: booksReducer,
    getbooks: postsSlice,
  },
});
export default store;
