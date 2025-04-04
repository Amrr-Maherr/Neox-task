import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../products/productsSlice";

const DEFAULT_MAX_PRICE = 3500;

const initialState = {
  availableCategories: [],
  activeCategory: null,
  maxPrice: DEFAULT_MAX_PRICE,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      const categoryPayload = action.payload;
      state.activeCategory =
        state.activeCategory === categoryPayload ? null : categoryPayload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    resetFilters: (state) => {
      state.activeCategory = null;
      state.maxPrice = DEFAULT_MAX_PRICE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const uniqueCategories = [
        ...new Set(action.payload.map((product) => product.category)),
      ];
      state.availableCategories = uniqueCategories;
    });
  },
});

export const { setActiveCategory, setMaxPrice, resetFilters } =
  filtersSlice.actions;

export const selectAvailableCategories = (state) =>
  state.filters.availableCategories;
export const selectActiveCategory = (state) => state.filters.activeCategory;
export const selectMaxPrice = (state) => state.filters.maxPrice;

export default filtersSlice.reducer;
