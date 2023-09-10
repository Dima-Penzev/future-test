import "./SearchBar.css";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/operations";
import * as actions from "../redux/actions";
import { useState } from "react";

function SearchBar({
  books,
  dataQuery,
  onSubmit,
  onAddQuery,
  onAddCategory,
  onAddSort,
  onClearBooksStore,
}) {
  const [warning, setWarning] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const { bookQuery, category, sort } = dataQuery;

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "book":
        const normalizedQuery = value.trim();
        onAddQuery(normalizedQuery);
        break;

      case "categories":
        onAddCategory(value);
        break;

      case "sorting":
        onAddSort(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (dataQuery.bookQuery === "") {
      setWarning(true);
      return;
    }

    if (Object.keys(books).length !== 0) {
      onClearBooksStore({});
    }

    if (pathname !== "/") {
      navigate("/", { replace: true });
    }

    onSubmit(dataQuery);
    setWarning(false);
  }

  return (
    <header className="search-bar">
      <h1 className="search-bar__title">Search for books</h1>
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <p className="search-bar__warning">
          {warning && "You need to enter anything"}
        </p>
        <div className="search-bar__container">
          <input
            className="search-bar__input"
            type="text"
            name="book"
            value={bookQuery}
            onChange={handleChange}
            placeholder="Book"
          />
          <button className="search-bar__button" type="submit" />
        </div>
        <div className="search-bar__options-container">
          <label className="search-bar__option">
            Categories{" "}
            <select
              className="search-bar__select"
              name="categories"
              value={category}
              onChange={handleChange}
            >
              <option value="">all</option>
              <option value="art">art</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
          </label>
          <label className="search-bar__option">
            Sorting by{" "}
            <select
              className="search-bar__select"
              name="sorting"
              value={sort}
              onChange={handleChange}
            >
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </label>
        </div>
      </form>
    </header>
  );
}

const mapStateToProps = ({ books, dataQuery }) => ({
  books,
  dataQuery,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(fetchBooks(data)),
  onAddQuery: (data) => dispatch(actions.setBookQuery(data)),
  onAddCategory: (data) => dispatch(actions.selectCategory(data)),
  onAddSort: (data) => dispatch(actions.sortBookBy(data)),
  onClearBooksStore: (data) => dispatch(actions.clearBookStore(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
