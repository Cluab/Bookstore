import React from 'react';
import Book from '../../components/book/book';
import Form from '../../components/form/form';
// adding the main books page and importing its components for use

export default function Books() {
  return (
    <>
      <div>
        <Book
          title="Atomic habit"
          author="James Clear"
        />
      </div>

      <div><Form /></div>
    </>
  );
}
