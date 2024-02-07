import { createSlice } from "@reduxjs/toolkit";

export const toolkitSlice = createSlice({
  name: "toolkitSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    decrement(state) {
      state.count = state.count > 0 ? state.count - 1 : state.count;
    },
  },
});
export default toolkitSlice.reducer;
export const { increment, decrement } = toolkitSlice.actions;
