import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Redux/products/productsSlice";
import cartReducer from "../Redux/products/cartSlice"; // استيراد cartReducer

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer, // إضافة cartReducer إلى الـ store
  },
});

export default store;
