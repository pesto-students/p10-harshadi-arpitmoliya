import React, { PureComponent } from "react";

class Book extends PureComponent {
  render(props) {
    return (
      <div className="book">
        <h3>{props.title}</h3>
        <p>Author: {props.author}</p>
        <p>Year: {props.year}</p>
      </div>
    );
  }
}

export default Book;
