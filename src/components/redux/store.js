import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../redux/reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "booksData",
  storage,
  whitelist: ["books", "dataQuery"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: new MiddlewareArray().concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
