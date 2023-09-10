import { Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import BooksList from "../BooksList/BooksList";
import BookPage from "../BookPage/BookPage";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/book/:bookId" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
