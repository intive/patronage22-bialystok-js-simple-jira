import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../../state/storeWithToolkit";
import { delay } from "./delay";

const DEMO_DELAY = 3000;

export const fetchProjects = createAsyncThunk(
  "projects/getProjects",
  async (_, thunkAPI) => {
    try {
      await delay(DEMO_DELAY);

      const response = await fetch("./exampleProjects.json", {
        signal: thunkAPI.signal,
      });

      return await response.json();
    } catch {
      console.error("An error has occurred!");
      return await Promise.reject();
    }
  }
);

export enum Status {
  INITIAL = "initial",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface Project {
  id: number;
  name: string;
}

interface SliceState {
  status: Status;
  projects: Project[];
}

const initialState = {
  status: Status.INITIAL,
} as SliceState;

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProjects.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.status = Status.SUCCESS;
    });
  },
});

const selectProjectsState = (state: RootState) => state.projects;

export const selectProjectsStatus = (state: RootState) =>
  selectProjectsState(state).status;

export const selectProjects = (state: RootState) =>
  selectProjectsState(state).projects;

export default projectsSlice.reducer;
