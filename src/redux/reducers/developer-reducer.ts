import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { Developer } from "@/types/developer-model";

interface DevelopersState {
  developers: Developer[];
  fetchingDevelopers: boolean;
}

// Define the initial state using that type
const initialState: DevelopersState = {
  developers: [],
  fetchingDevelopers: false,
};

export const developerSlice = createSlice({
  name: "developer",
  initialState,
  reducers: {
    setDevelopers: (state, action: PayloadAction<Developer[]>) => {
      state.developers = action.payload;
    },
    setFetchingDevelopers: (state, action: PayloadAction<boolean>) => {
      state.fetchingDevelopers = action.payload;
    },
  },
});

export const { setDevelopers, setFetchingDevelopers } = developerSlice.actions;

export const selectDevelopers = (state: RootState) =>
  state.developer.developers;

export const selectFetchingDevelopers = (state: RootState) =>
  state.developer.fetchingDevelopers;

export default developerSlice.reducer;
