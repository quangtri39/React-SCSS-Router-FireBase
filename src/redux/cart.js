import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    hidden: true,
  },
  reducers: {
    sethidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

// Action creators are generated for each case reducer function
export const { sethidden } = cardSlice.actions;

export default cardSlice.reducer;
