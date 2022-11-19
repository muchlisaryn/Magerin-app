import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import MoviesReducer from "./features/MovieSlice";
export const store = configureStore({
  reducer: {
    movie: MoviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
