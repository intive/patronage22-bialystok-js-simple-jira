import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../views/SecondPage/countSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// redux-thunk added automatically
// redux dev tools automatically configured

// 'createSlice' simplifies creating actions, action-creators and reducer
// 'createSlice' automatically creates actions and returns them in property 'actions'
// 'slice' of app state
// thanks to 'immer' library we can write reducers code without worrying about Immutability
// 'nanoid' function is available out of the box

// https://redux-toolkit.js.org/tutorials/typescript
