import { initialState, REFRESH_TOKEN_INITIAL_VALUE } from "./AuthProvider";
import { Actions, ActionTypes, State, StatusTypes } from "./types";

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        ...state,
        status: StatusTypes.LOGGING_IN,
        username: action.payload.credentials.login,
        password: action.payload.credentials.password,
      };

    case ActionTypes.LOG_IN_SUCCESS:
      return {
        ...state,
        status: StatusTypes.SUCCESS,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };

    case ActionTypes.LOG_IN_ERROR:
      return {
        ...state,
        status: StatusTypes.ERROR,
      };

    case ActionTypes.LOG_OUT:
      return {
        ...state,
        status: StatusTypes.LOGGING_OUT,
      };

    case ActionTypes.LOG_OUT_COMPLETED:
      return {
        ...state,
        ...initialState,
        accessToken: "",
        refreshToken: REFRESH_TOKEN_INITIAL_VALUE,
      };

    default:
      return state;
  }
};
