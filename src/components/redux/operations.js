import { searchBooks } from "../../utils/booksApi";
import {
  fetchBooksRequest,
  fetchBooksSuccess,
  fetchBooksError,
} from "./actions";

export const fetchBooks = (data, step) => async (dispatch) => {
  dispatch(fetchBooksRequest());

  try {
    const response = await searchBooks(data, step);

    dispatch(fetchBooksSuccess(response));
  } catch (error) {
    dispatch(fetchBooksError(error));
  }
};
