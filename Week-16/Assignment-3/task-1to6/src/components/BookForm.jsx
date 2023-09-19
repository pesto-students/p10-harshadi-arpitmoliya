import React, { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, year } = this.state;

    const newBook = { title, author, year };

    this.props.onAddBook(newBook);

    this.setState({
      title: "",
      author: "",
      year: "",
    });
  };

  render() {
    const { title, author, year } = this.state;

    return (
      <div>
        <h2>Add new book</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="year">Year:</label>
            <input
              type="number"
              id="year"
              name="year"
              value={year}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm