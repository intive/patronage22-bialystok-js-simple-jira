import { Actions, ActionTypes, State } from "./types";

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        token: action.payload.token,
      };

    case ActionTypes.LOG_OUT:
      return {
        ...state,
        token: "",
      };

    default:
      return state;
  }
};
