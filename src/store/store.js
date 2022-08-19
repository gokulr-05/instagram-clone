import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalStorySlice";
import postReducer from "./slices/postsDataSlice";
import profileReducer from "./slices/profileDataSlice";

let store = configureStore({
  reducer: {
    modalStoryReducer: modalReducer,
    postDataReducer: postReducer,
    profileDataReducer: profileReducer,
  },
});

export default store;
