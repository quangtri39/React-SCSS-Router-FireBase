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
      const exitst = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (exitst) {
        state.cartItems = state.cartItems.map((cardItem) =>
          cardItem.id === action.payload.id
            ? { ...cardItem, quantity: cardItem.quantity + 1 }
            : cardItem
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    decreaseItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        state.cartItems = state.cartItems.map((cardItem) =>
          cardItem.id === action.payload.id
            ? { ...cardItem, quantity: cardItem.quantity - 1 }
            : cardItem
        );
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
export const { togglehidden, addItem, removeItem, decreaseItem } =
  cardSlice.actions;

export default cardSlice.reducer;
