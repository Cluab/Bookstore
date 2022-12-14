import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import { getPosts } from '../../redux/books/posts/postsSlice';
// import dispatch and redux action for hook
// uuidv4 for generating random id

const Form = () => {
  // add dispatch as a const
  const dispatch = useDispatch();

  // adding the input as a const for using there id
  let INname;
  let INauthor;

  // adding increment function for handling redux action

  const handleIncremt = (name, author) => {
    if (!name.value.trim() || !author.value.trim()) {
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title: name.value,
      author: author.value,
      category: 'Fiction',
    };
    dispatch(getPosts());
    dispatch(addBook(newBook));
    INname.value = '';
    INauthor.value = '';
  };

  return (
  // return jsx syntax for displaying in html
    <>
      <h3>ADD NEW BOOk</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleIncremt(INname, INauthor);
      }}
      >
        <input ref={(node) => { INname = node; }} type="text" placeholder="Book title" />
        <input ref={(node) => { INauthor = node; }} type="text" placeholder="author" />
        <button type="submit" onClick={() => { handleIncremt(); }}>ADD BOOK</button>
      </form>
    </>
  );
};

export default Form;
