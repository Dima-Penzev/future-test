import { createAction } from "@reduxjs/toolkit";

export const fetchBooksRequest = createAction("books/fetchBooksRequest");
export const fetchBooksSuccess = createAction("books/fetchBooksSuccess");
export const fetchBooksError = createAction("books/fetchBooksError");

export const setBookQuery = createAction("books/setBookQuery");
export const selectCategory = createAction("books/selectCategory");
export const sortBookBy = createAction("books/sortBookBy");

export const clearBookStore = createAction("books/clearBooksStore");
