import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {baseApi} from "shared/api/typicode/base";
import { postReducer } from "./model";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    posts: postReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector