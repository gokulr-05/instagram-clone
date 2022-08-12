import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

let postsData = createSlice({
  name: "postDataSlice",
  initialState: { data: data },
  reducers: {},
});

export default postsData.reducer;
export let postDataAction = postsData.actions;
