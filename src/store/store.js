import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalStorySlice";
import postReducer from "./slices/postsDataSlice";

let store = configureStore({
  reducer: { modalStoryReducer: modalReducer, postDataReducer: postReducer },
});

export default store;
