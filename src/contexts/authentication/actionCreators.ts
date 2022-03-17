import { Actions, ActionTypes } from "./types";

export const logIn = (token: string): Actions => ({
  type: ActionTypes.LOG_IN,
  payload: {
    token,
  },
});

export const logOut = (): Actions => ({ type: ActionTypes.LOG_OUT });
