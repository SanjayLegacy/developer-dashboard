import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user-reducer";
import developerReducer from "./reducers/developer-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    developer: developerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
