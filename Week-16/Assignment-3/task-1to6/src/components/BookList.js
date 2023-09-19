import React from "react";

function BookList({ books }) {
  return (
    <div>
      <h2>List of Books</h2>
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
    </div>
  );
}

export default BookList;
