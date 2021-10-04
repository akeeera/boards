import { createSlice } from '@reduxjs/toolkit'
import { getBoards, setBoards } from "./actions/boards.actions";

export const boardsSlice = createSlice({
    name: 'boards',
    initialState: { boards: [] },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getBoards.fulfilled, (state, action) => {
            state.boards = action.payload;
        })
    },
})