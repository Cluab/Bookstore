const ADD = 'add';
const REMOVE = 'remove';

const initialState = [];

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
      return state.map((book) => book.id === action.id).filter((book) => book.id === action.id);
    default:
      return state;
  }
};
export default booksReducer;
