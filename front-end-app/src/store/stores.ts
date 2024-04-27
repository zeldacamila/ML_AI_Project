import { configureStore } from '@reduxjs/toolkit'

//* Importing slices.
import { uiSlice } from './slices/ui/uiSlice';
import { authSlice } from './slices/auth/authSlice';
import { boardGameSlice } from './slices/boardGames/boardGameSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    boardGames: boardGameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;