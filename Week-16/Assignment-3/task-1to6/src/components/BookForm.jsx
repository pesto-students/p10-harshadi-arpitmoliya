import React,{ useState} from "react";

function BookForm(onAddBook){
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
  })

  const handleInputChange = (e)=> {
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  } 

  const handleSubmit = (e)=> {
    e.preventDefault()

    const {title,author,year} = formData

    if (title&author&year) {
      const newBook = {
        title,
        author,
        year: parseInt(year)
      }

      onAddBook(newBook)

      setFormData({ title: '', author: '', year: '' });
    }
  }

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm