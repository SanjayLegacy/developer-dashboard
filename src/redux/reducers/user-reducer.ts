import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import type { RootState } from "../store";

interface UserState {
  loggedInUser: User | undefined;
}

// Define the initial state using that type
const initialState: UserState = {
  loggedInUser: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<User>) => {
      state.loggedInUser = action.payload;
    },
    logOutUser: (state) => {
      state.loggedInUser = undefined;
    },
  },
});

export const { setLoggedInUser, logOutUser } = userSlice.actions;

export const selectLoggedInUser = (state: RootState) => state.user.loggedInUser;

export default userSlice.reducer;
