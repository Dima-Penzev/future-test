import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import rootReducer from "../redux/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk).concat(logger),
});

export default store;
