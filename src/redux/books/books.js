const ADD = 'add';
const REMOVE = 'remove';
const initialState = [{
  name: 'Atomic habit',
  author: 'James Clear',
  id: 1,
}, {
  name: 'How to Win Friends and Influence People',
  author: 'Dale Carnegie',
  id: 2,
}];

// initializing actions and state

// adding and exporting action creators
export const addBook = (book) => ({
  type: ADD,
  name: book.name,
  author: book.author,
  id: book.id,
});

export const removeBook = (book) => ({
  type: REMOVE,
  name: book.name,
  author: book.author,
  id: book.id,
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
