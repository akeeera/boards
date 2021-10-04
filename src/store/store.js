import { rootReducer } from "../reducers/root.reducer";
import { configureStore } from '@reduxjs/toolkit'

export const initialState = {
    boards: []
}

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})
