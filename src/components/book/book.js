import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
// import PropType for making sure it is string.isRequired

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  // using discarding for props
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
            dispatch(removeBook(id));
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
  id: PropTypes.number.isRequired,
};
export default Book;
