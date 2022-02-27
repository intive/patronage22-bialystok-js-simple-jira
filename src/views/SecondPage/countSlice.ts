import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../state/storeWithToolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    add: (state) => ({
      count: state.count + 1,
    }),
  },
});

export const { add } = countSlice.actions;

const selectCountState = (state: RootState) => state.count;
export const selectCountValue = (state: RootState) =>
  selectCountState(state).count;

export default countSlice.reducer;
