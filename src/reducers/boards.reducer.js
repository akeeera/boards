import {
    createSlice,
} from '@reduxjs/toolkit'
import { setBoards, getBoards } from '../actions/boards.actions'
import { preloadedState } from '../store/preloadedState'

export const sliceBoards = createSlice({
    name: 'boards',
    initialState: preloadedState.boards,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBoards.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(setBoards.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})