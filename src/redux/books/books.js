import { createPost, deletePost } from './posts/postsSlice';

const ADD = 'add';
const REMOVE = 'remove';
let nextTodoId = -1;
const initialState = [{
  name: 'Atomic habit',
  author: 'James Clear',
  id: nextTodoId += 1,
}, {
  name: 'How to Win Friends and Influence People',
  author: 'Dale Carnegie',
  id: nextTodoId += 1,
}];

// initializing actions and state

// adding and exporting action creators
export const addBook = (book) => {
  createPost(book).then((response) => {
    console.log(response);
    return book;
  });
};

export const removeBook = (key) => deletePost(key).then((response) => {
  console.log(response);
  const remove = {
    type: REMOVE,
    id: key,
  };
  return remove;
});

// adding books reducer for handling different actions and exporting it as default

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          name: action.name,
          author: action.author,
          id: action.id,
          key: action.key,
        },
      ];
    case REMOVE:
      return [...state.slice(0, action.id),
        ...state.slice(action.id + 1)];
    default:
      return state;
  }
};
export default booksReducer;
