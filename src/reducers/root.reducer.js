import { boardsSlice } from "./boards.reducer";
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    boardsSlice: boardsSlice.reducer,
})