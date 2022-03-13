import { initialState } from "./AuthProvider";

export type State = typeof initialState;

export enum ActionTypes {
  LOG_IN = "auth/logIn",
  LOG_OUT = "auth/logOut",
}

export type Actions =
  | { type: ActionTypes.LOG_IN; payload: { token: string } }
  | { type: ActionTypes.LOG_OUT };
