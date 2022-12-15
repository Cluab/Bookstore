import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
import { getPosts } from '../../redux/books/posts/postsSlice';
// adding the main books page and importing its components for use
// importing useSelectors for using the stored data

export default function Books() {
  // consting the data so we can loop though its content
  const books = useSelector((state) => state.books);
  const fetchedBooks = useSelector((state) => state.getbooks.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <div>
        {fetchedBooks.map((key) => (
          <Book
            key={key.item_id}
            id={key.item_id}
            title={key.title}
            author={key.author}
          />
        ))}
        {books.map((key) => (
          <Book
            key={key.item_id}
            id={key.item_id}
            title={key.title}
            author={key.author}
          />
        ))}

      </div>
      <div><Form /></div>
    </>
  );
}
