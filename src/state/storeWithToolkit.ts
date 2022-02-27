import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../views/SecondPage/countSlice";
import projectsReducer from "../views/Projects/projectsSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
