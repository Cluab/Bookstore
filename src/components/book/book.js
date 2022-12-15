import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import { removeBook } from '../../redux/books/books';
import { deleteAction } from '../../redux/books/posts/postsSlice';
// import PropType for making sure it is string.isRequired
// import dispatch and redux action for hook

const Book = (props) => {
  const { title, author, id } = props;
  let dataBooks = useSelector((state) => state.getbooks.list);

  // using discarding for props

  // add dispatch as a const
  const dispatch = useDispatch();
  const filterBooks = () => {
    if (Object.keys(dataBooks).length === 1) dispatch(deleteAction({}));
    else {
      dataBooks = Object.fromEntries(Object.entries(dataBooks).filter(([key]) => key.includes(id)));
      dispatch(deleteAction(dataBooks));
    }
  };
  return (
  // return jsx syntax for displaying in html
    <div id={id}>
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            filterBooks(id);
          }}
        >
          Remove

        </button>
      </div>

    </div>
  );
};

// use propTypes to receiving only strings for props.
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
