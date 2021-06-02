import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: null,
  },
  reducers: {
    setcategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setcategory } = categorySlice.actions;

export default categorySlice.reducer;
