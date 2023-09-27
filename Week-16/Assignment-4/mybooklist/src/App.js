// App.js
import React, { useState } from "react";
import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import { bookData } from "./BookData";

function App() {
  const [books, setBooks] = useState(bookData);

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
