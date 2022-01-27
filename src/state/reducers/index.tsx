import { combineReducers } from "redux";
import bankReducer from "./countReducer";

const reducers = combineReducers({
  bank: bankReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
