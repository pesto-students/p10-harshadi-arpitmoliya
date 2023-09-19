import BookList from "./components/BookList";
import WithLogging from "./components/WithLoging";

const BookListWithLogging = WithLogging(BookList);

function App() {
  return (
    <div className="App">
      <BookListWithLogging />
    </div>
  );
}

export default App;
