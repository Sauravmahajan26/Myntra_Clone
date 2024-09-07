import { configureStore, createSlice } from "@reduxjs/toolkit";
import ItemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import BagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: ItemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default MyntraStore;
