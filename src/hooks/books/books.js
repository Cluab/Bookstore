import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
import { getPosts } from '../../redux/books/posts/postsSlice';
// adding the main books page and importing its components for use
// importing useSelectore for using the stored data
export default function Books() {
  // consting the data so we can loop though its content
  const books = useSelector((state) => state.getbooks.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div>
        {Object.entries(books).map(([key, value]) => (
          <Book
            key={key}
            id={key}
            title={value[0].title}
            author={value[0].author}
          />
        ))}

      </div>
      <div><Form /></div>
    </>
  );
}
