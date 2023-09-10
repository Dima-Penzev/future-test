import "./BookItem.css";
import defaultPoster from "../../images/opened-book.jpg";
import { Link } from "react-router-dom";

function BookItem({ id, cover, title, categories, authors }) {
  return (
    <li className="book">
      <Link className="book__link" to={`/book/${id}`}>
        <div className="book__thumb">
          <img
            className="book__cover"
            src={cover || defaultPoster}
            alt={title}
          />
        </div>
        <p className="book__categorie">{categories}</p>
        <h2 className="book__title">{title}</h2>
        <p className="book__author">{authors}</p>
      </Link>
    </li>
  );
}

export default BookItem;
