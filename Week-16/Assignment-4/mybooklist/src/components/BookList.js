function BookList({ books, onDelete }) {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="BookList">
      <h2>List of Books</h2>
      {books.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index} className="BookItem">
              <div>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
                <button
                  className="DeleteButton"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
