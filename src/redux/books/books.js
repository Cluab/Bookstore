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
  const newBook = {
    type: ADD,
    name: book.name,
    author: book.author,
    id: nextTodoId += 1,
  };
  return newBook;
};

export const removeBook = (key) => ({
  type: REMOVE,
  id: key,
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
