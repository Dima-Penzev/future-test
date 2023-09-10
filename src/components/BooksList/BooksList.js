import { connect } from "react-redux";
import BookItem from "../BookItem/BookItem";
import AddMoreBtn from "../AddMoreBtn/AddMoreBtn";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
import "./BooksList.css";

function BooksList({ books, loading, requestError }) {
  const { totalItems, items } = books;

  return (
    <>
      {totalItems && <p className="books-amount">Found {totalItems} results</p>}
      <ul className="books-list">
        {totalItems > 0 &&
          items.map(({ id, volumeInfo }) => (
            <BookItem
              key={id}
              id={id}
              title={volumeInfo.title}
              cover={volumeInfo.imageLinks?.thumbnail}
              authors={volumeInfo.authors}
              categories={volumeInfo.categories}
            />
          ))}
      </ul>
      {loading && <Preloader />}
      {requestError && <Error text={"Some server error. Try again later"} />}
      {totalItems && items.length < totalItems && <AddMoreBtn />}
    </>
  );
}

const mapStateToProps = ({ books, loading, requestError }) => ({
  books,
  loading,
  requestError,
});

export default connect(mapStateToProps)(BooksList);
