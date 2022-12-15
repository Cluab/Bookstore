import { createPost } from './posts/postsSlice';

const ADD = 'add';
const REMOVE = 'remove';
const initialState = [];

// initializing actions and state
// adding and exporting action creators
export const addBook = (book) => {
  createPost(book);
  const newBook = {
    type: ADD,
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: 'Fiction',
  };
  return newBook;
};

export const removeBook = (key) => {
  // deletePost(key);
  const remove = {
    type: REMOVE,
    item_id: key,
  };
  return remove;
};

// adding books reducer for handling different actions and exporting it as default
let newState;
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          item_id: action.item_id,
        },
      ];
    case REMOVE:
      newState = state.filter((books) => (books.item_id !== action.item_id));
      return newState;

    default:
      return state;
  }
};
export default booksReducer;
