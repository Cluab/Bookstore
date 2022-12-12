const STATUS = 'checkingstatus';
const initialState = [];

// initializing actions and state

// adding and exporting action creators

export const checkStatus = () => ({
  action: STATUS,
});

// adding catagories reducer for handling different actions and exporting it as default

const catagoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default catagoriesReducer;
