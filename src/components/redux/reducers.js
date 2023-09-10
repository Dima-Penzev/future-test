import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const booksReducer = createReducer({}, (builder) => {
  builder
    .addCase(actions.fetchBooksSuccess, (state, { payload }) => {
      const emptyBookStore = Object.keys(state).length === 0;

      if (emptyBookStore) {
        return payload;
      } else {
        return {
          ...state,
          items: [...state.items, ...payload.items],
        };
      }
    })
    .addCase(actions.clearBookStore, (_, { payload }) => payload);
});

export const loadAmount = createReducer(0, (builder) => {
  builder.addCase(actions.fetchBooksSuccess, (state, _) => state + 30);
});

export const loading = createReducer(false, (builder) => {
  builder
    .addCase(actions.fetchBooksRequest, () => true)
    .addCase(actions.fetchBooksSuccess, () => false)
    .addCase(actions.fetchBooksError, () => false);
});

export const requestError = createReducer(false, (builder) => {
  builder
    .addCase(actions.fetchBooksError, () => true)
    .addCase(actions.fetchBooksSuccess, () => false)
    .addCase(actions.fetchBooksRequest, () => false);
});

export const dataQueryReducer = createReducer(
  { bookQuery: "", category: "", sort: "relevance" },
  (builder) => {
    builder
      .addCase(actions.setBookQuery, (state, { payload }) => ({
        ...state,
        bookQuery: payload,
      }))
      .addCase(actions.selectCategory, (state, { payload }) => ({
        ...state,
        category: payload,
      }))
      .addCase(actions.sortBookBy, (state, { payload }) => ({
        ...state,
        sort: payload,
      }));
  }
);

export default combineReducers({
  books: booksReducer,
  dataQuery: dataQueryReducer,
  requestError,
  loadAmount,
  loading,
});
