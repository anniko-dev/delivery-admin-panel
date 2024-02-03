import { combineReducers } from '@reduxjs/toolkit';
import { api } from '@/core/api/root.api.ts';

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});
