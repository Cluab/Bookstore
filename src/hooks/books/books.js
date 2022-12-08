import React from 'react';
import Book from '../../components/book/book';
import Form from '../../components/form/form';

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
