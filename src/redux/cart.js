import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItems: [],
  },
  reducers: {
    togglehidden: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      console.log(action.payload);
      const exitst = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      console.log(exitst);
      if (exitst) {
        state.cartItems = state.cartItems.map((cardItem) =>
          cardItem.id === action.payload.id
            ? { ...cardItem, count: cardItem.count + 1 }
            : cardItem
        );
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, count: 1 }];
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { togglehidden, addItem, removeItem } = cardSlice.actions;

export default cardSlice.reducer;
