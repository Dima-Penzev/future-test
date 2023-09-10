const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

async function fetchBooks(url = "") {
  const response = await fetch(url);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function searchBooks(dataQuery, step = 0) {
  const { bookQuery, category, sort } = dataQuery;

  return fetchBooks(
    `${BASE_URL}?q=${bookQuery}${
      category !== "" ? `+subject:${category}` : ""
    }&orderBy=${sort}&printType=books&startIndex=${step}&maxResults=30`
  );
}

export function getBookById(bookId) {
  return fetchBooks(`${BASE_URL}/${bookId}`);
}
