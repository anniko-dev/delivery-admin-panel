import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/core/reducers';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '@/core/api/root.api.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
