import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Async thunk action for adding item and showing toast
export const addItemWithToast = createAsyncThunk(
  "cart/addItemWithToast",
  async (product, { dispatch }) => {
    try {
      dispatch(addItem(product));
      toast.success(`${product.title.slice(0, 15)}... added to cart!`, {
        duration: 2000,
        position: "bottom-right",
      });
    } catch (error) {
      // Handle errors if needed
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart."); //optional:  show a error message
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  extraReducers: (builder) => {
    // Optional: Handle pending/fulfilled/rejected states of the async thunk
    builder.addCase(addItemWithToast.pending, (state) => {
      //  Optional: set loading state to true for the cart or similar
      // console.log('Adding item...');
    });
    builder.addCase(addItemWithToast.fulfilled, (state) => {
      // Optional:  set loading state to false for the cart or similar
      // console.log('Item added successfully!');
    });
    builder.addCase(addItemWithToast.rejected, (state, action) => {
      // Optional: set loading state to false and handle the error
      console.error("Failed to add item:", action.error.message);
    });
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
