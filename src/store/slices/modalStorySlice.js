import { createSlice } from "@reduxjs/toolkit";

let modalSlice = createSlice({
  name: "modalSlice",
  initialState: { storyModalData: {} },
  reducers: {
    storyModalHandler: (state, action) => {
      state.storyModalData = action.payload.storyModalData;
    },
  },
});

export let modalSliceAction = modalSlice.actions;
export default modalSlice.reducer;
