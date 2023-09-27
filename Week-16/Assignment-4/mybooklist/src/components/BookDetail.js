import React, { useState } from "react";

function BookDetail({ book }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      {isExpanded && (
        <div>
          <p>Description: {book.description}</p>
          <p>Genre: {book.genre}</p>
        </div>
      )}
      <button onClick={toggleDetails} className="DetailsButton">
        {isExpanded ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

export default BookDetail;
