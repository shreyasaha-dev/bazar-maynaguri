import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
const { reducer, actions } = createSlice({
  name: "userDataReducer",
  initialState,
  reducers: {
    addToken: (state, action) => {
      return action.payload;
    },
  },
});
export default reducer;
export const { addToken } = actions;
