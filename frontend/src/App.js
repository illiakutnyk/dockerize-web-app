import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book shelf</h1>
        {books && books.map(book => (
          <div key={book.id}>{book.title} by {book.author}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
