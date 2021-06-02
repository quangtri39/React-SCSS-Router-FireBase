import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import cartReducer from "./cart";
import categoryReducer from "./category";
export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
