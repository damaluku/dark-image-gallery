import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from "./collectionSlice/collectionSlice";

const store = configureStore({
  reducer: {
    collection: collectionReducer,
  },
});

export default store;
