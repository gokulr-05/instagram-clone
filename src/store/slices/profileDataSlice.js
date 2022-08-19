import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data";

let profileData = createSlice({
  name: "profileDataSlice",
  initialState: { profileData: data.profile },
  reducers: {},
});

export default profileData.reducer;
export let profileDataActions = profileData.actions;
