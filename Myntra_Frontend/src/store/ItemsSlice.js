import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitItems: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const ItemsAction = ItemsSlice.actions;

export default ItemsSlice;
