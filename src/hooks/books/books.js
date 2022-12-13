import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
// adding the main books page and importing its components for use

export default function Books() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.name}
            author={book.author}
          />
        ))}
      </div>

      <div><Form /></div>
    </>
  );
}
