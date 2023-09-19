import React from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>List of Books</h2>
      {books.length === 0 ? (
        <p>The book list is empty</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
