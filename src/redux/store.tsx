

import thunk from "redux-thunk";
import { createStore, applyMiddleware, } from "redux"
import {counterReducer} from "./reducers/index"


export const store= createStore(counterReducer, applyMiddleware(thunk))


