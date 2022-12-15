import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
import { getPosts } from '../../redux/books/posts/postsSlice';
// import { addBook } from '../../redux/books/books';
// adding the main books page and importing its components for use
// importing useSelectore for using the stored data
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
        {Object.entries(fetchedBooks).map(([key, value]) => (
          <Book
            key={key}
            id={key}
            title={value[0].title}
            author={value[0].author}
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
