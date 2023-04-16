import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { charactersAPI } from '@/store/service';
import searchReducer from './reducers/SearchSlice';
import formReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  search: searchReducer,
  form: formReducer,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(charactersAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
