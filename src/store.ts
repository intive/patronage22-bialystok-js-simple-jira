import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { stateReducer } from "./reducers/reducers";

const initialState = {
  clickCount: 0,
};

const store = createStore(
  stateReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
