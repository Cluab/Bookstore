import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
import './books.css';
// adding the main books page and importing its components for use
// importing useSelectors for using the stored data ands redux action calls

export default function Books() {
  // consting local data from store so we can loop though its content
  const books = useSelector((state) => state.books);
  // consting fetched data from store so we can loop though its content
  const fetchedBooks = useSelector((state) => state.getbooks.list);

  // making api call for fetching data when screen is only reloaded
  return (
    <div className="container">
      <div>
        <ul className="books">
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
        </ul>
        <div className="divider" />
        <section><Form /></section>
      </div>
    </div>

  );
}
