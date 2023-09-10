import { useParams } from "react-router-dom";
import "./BookPage.css";
import { useEffect, useState } from "react";
import { getBookById } from "../../utils/booksApi";
import Preloader from "../Preloader/Preloader";
import Error from "../Error/Error";
import defaultImage from "../../images/opened-book.jpg";

function BookPage() {
  const [status, setStatus] = useState("idle");
  const [requredBook, setRequredBook] = useState({});
  const { bookId } = useParams();
  const { imageLinks, categories, description, title, authors } = requredBook;
  const authorsString = authors && authors.join(" ");

  useEffect(() => {
    setStatus("pending");

    getBookById(bookId)
      .then((res) => {
        setRequredBook(res.volumeInfo);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error);
        setStatus("rejected");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {status === "pending" && <Preloader />}
      {status === "rejected" && (
        <Error text={"Some server error. Try again later"} />
      )}
      {status === "resolved" && (
        <article className="article">
          <div className="article__cover-container">
            <img
              className="article__cover"
              src={imageLinks?.thumbnail || defaultImage}
              alt={title}
            />
          </div>
          <div className="article__text-container">
            {categories && <p className="article__category">{categories}</p>}
            <h2 className="article__title">{title}</h2>
            <p className="article__author">{authorsString}</p>
            {description && <p className="article__text">{description}</p>}
          </div>
        </article>
      )}
    </>
  );
}

export default BookPage;
