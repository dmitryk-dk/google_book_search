import React from 'react';
import Book from '../Book';

export default function Books({books, bookId, chooseBook}) {
  return (
    <div className="container">
      <div className="row">
        { books.map(
            book => <Book 
              book={book} 
              key={book.id} 
              onClick={chooseBook}
              isBookSelected={bookId}
            />
          ) }
      </div>
    </div>
  );
}
