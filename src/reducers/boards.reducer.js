import { createSlice } from '@reduxjs/toolkit'
import { getBoards } from "../actions/boards.actions";
import { initialState } from "../store/store";

export const boardsSlice = createSlice({
    name: 'boards',
    initialState: initialState.boards,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBoards.fulfilled, (state, action) => {
            state.boards = action.payload;
        })
    },
})