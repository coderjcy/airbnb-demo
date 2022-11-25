import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfo(state, { payload }) {
      state.detailInfo = payload;
    }
  }
});

export default detailSlice.reducer;
export const { changeDetailInfo } = detailSlice.actions