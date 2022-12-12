const STATUS = 'checkingstatus';
const initialState = [];

export const checkStatus = () => ({
  action: STATUS,
});

const catagoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};
export default catagoriesReducer;
