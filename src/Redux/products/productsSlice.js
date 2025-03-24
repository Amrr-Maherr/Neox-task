import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);


const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle", 
    error: null,
  },
  reducers: {
    productAddedToCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        existingProduct.isAddedToCart = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.map((product) => ({
          ...product,
          isAddedToCart: false,
        }));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { productAddedToCart } = productsSlice.actions;


export default productsSlice.reducer;


export const selectAllProducts = (state) => state.products.products;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;
