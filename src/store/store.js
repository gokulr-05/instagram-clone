import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalStorySlice";

let store = configureStore({ reducer: { modalStoryReducer: modalReducer } });

export default store;
