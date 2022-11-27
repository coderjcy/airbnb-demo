import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixed: false,
    isTopAlpha: false,
  },
  reducers: {
    changeIsFixed(state, { payload }) {
      state.isFixed = payload[0];
      state.isTopAlpha = payload[1];
    },
  },
});

export default mainSlice.reducer;
export const { changeIsFixed } = mainSlice.actions;
