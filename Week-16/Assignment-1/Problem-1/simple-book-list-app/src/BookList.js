import React from "react";

const BookList = () => {
  const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2018 },
    { title: "Book 3", author: "Author 3", year: 2022 },
  ];

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Title:</strong> {book.title}
            <br />
            <strong>Author:</strong> {book.author}
            <br />
            <strong>Year:</strong> {book.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
