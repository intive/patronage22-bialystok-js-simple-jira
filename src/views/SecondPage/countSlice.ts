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

// 'createSlice' simplifies creating actions, action-creators and reducer
// 'createSlice' automatically creates actions and returns them in property 'actions'
// 'slice' of app state
// thanks to 'immer' library we can write reducers code without worrying about Immutability
// 'nanoid' function is available out of the box

// https://redux-toolkit.js.org/tutorials/typescript
