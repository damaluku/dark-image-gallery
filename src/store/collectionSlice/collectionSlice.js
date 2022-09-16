import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    myCollection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default collectionSlice.reducer;
export const { myCollection } = collectionSlice.actions;
