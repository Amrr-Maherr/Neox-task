import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Redux/products/productsSlice";
import cartReducer from "../Redux/products/cartSlice"; // استيراد cartReducer
import filtersReducer from "../Redux/products/filtersSlice";
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});

export default store;
