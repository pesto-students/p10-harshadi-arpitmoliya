// App.js
import React, { useState } from "react";
import "./App.css"; // Import your CSS file here
import BookForm from "../src/components/BookForm";
import BookList from "../src/components/BookList";
import BookDetail from "../src/components/BookDetail";

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      year: 2020,
      description: "A great book about something interesting.",
      genre: "Fiction",
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      year: 2018,
      description: "Another interesting book worth reading.",
      genre: "Non-fiction",
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      year: 2022,
      description: "A new book for the new generation.",
      genre: "Sci-Fi",
    },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>My Book List</h1>
      <BookForm onAddBook={addBook} />
      <BookList books={books} onDelete={handleDelete} />
      {books.map((book, index) => (
        <BookDetail key={index} book={book} />
      ))}
    </div>
  );
}

export default App;
