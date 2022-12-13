import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  let INname;
  let INauthor;
  const handleIncremt = (name, author) => {
    if (!name.value.trim() || !author.value.trim()) {
      return;
    }
    const newBook = {
      name: name.value,
      author: author.value,
      id: uuidv4(),
    };
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
