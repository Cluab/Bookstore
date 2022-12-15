import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import { deleteAction } from '../../redux/books/posts/postsSlice';
import './book.css';
// import PropType for making sure it is string.isRequired
// import dispatch and redux action for hook

const Book = (props) => {
  const { title, author, id } = props;

  // const fetched books reducer data
  let dataBooks = useSelector((state) => state.getbooks.list);

  // using discarding for props

  // add dispatch as a const
  const dispatch = useDispatch();

  // add function for deleting and updating reducer fetched data store
  const filterBooks = () => {
    dataBooks = dataBooks.filter((books) => (books.item_id !== id));
    dispatch(deleteAction(dataBooks));
  };
  return (
  // return jsx syntax for displaying in html
    <li className="styNone">
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-catagories">Action</h4>
            <h2 className="book-title" id={id}>{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">Comment</button>
              <div className="divider" />
              <button
                className="button-outline"
                type="button"
                onClick={() => {
                  filterBooks(id);
                  dispatch(removeBook(id));
                }}
              >
                Remove
              </button>
              <div className="divider" />
              <button className="button-outline" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular=progress" />
            </div>
            <div className="progress-state">
              <p className="percentage">0%</p>
              <p className="completed">Completed</p>
            </div>
            <span className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="chapter-label">CURRENT CHAPTER</p>
                <p className="chapter">Chapter 17</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </li>
  );
};

// use propTypes to receiving only strings for props.
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
