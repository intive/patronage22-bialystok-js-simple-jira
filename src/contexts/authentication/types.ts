import { INITIAL_VALUES } from "src/views/Login/LoginView";
import { initialState, REFRESH_TOKEN_INITIAL_VALUE } from "./AuthProvider";

export type State = typeof initialState;

export enum ActionTypes {
  LOG_IN = "auth/logIn",
  LOG_IN_SUCCESS = "auth/logInSuccess",
  LOG_IN_ERROR = "auth/logInError",
  LOG_OUT = "auth/logOut",
  LOG_OUT_COMPLETED = "auth/logOutSuccess",
}

export enum StatusTypes {
  INITIAL = "initial",
  LOGGING_IN = "loggingIn",
  LOGGING_OUT = "loggingOut",
  SUCCESS = "success",
  ERROR = "error",
}

export type Actions =
  | {
      type: ActionTypes.LOG_IN;
      payload: { credentials: typeof INITIAL_VALUES };
    }
  | { type: ActionTypes.LOG_IN_SUCCESS; payload: Tokens }
  | { type: ActionTypes.LOG_IN_ERROR }
  | { type: ActionTypes.LOG_OUT }
  | { type: ActionTypes.LOG_OUT_COMPLETED };
export interface Tokens {
  accessToken: string;
  refreshToken: typeof REFRESH_TOKEN_INITIAL_VALUE;
}
